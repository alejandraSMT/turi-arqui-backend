const { Place, District, PlaceType, Category, ParentCategory } = require('../model');

exports.getTopPlacesByType = async (req, res) => {
    try {
        const { placeTypeId } = req.params;

        if (!placeTypeId) {
            return res.status(400).json({ error: 'Place Type ID is required' });
        }

        const topPlaces = await Place.findAll({
            where: { place_type_id: placeTypeId },
            attributes: [
                'id', 'name', 'description', 'rating', 'photo', 
                'banner_photo', 'address', 'phone_number', 
                'website_url', 'opening_time', 'closing_time', 'cost'
            ],
            include: [
                {
                    model: District,
                    attributes: ['district_name'], // Incluir distrito
                    as: 'District',
                },
                {
                    model: PlaceType,
                    attributes: ['place_type_name'], // Incluir tipo de lugar
                    as: 'PlaceType',
                },
                {
                    model: Category,
                    attributes: ['category_name'], // Incluir categorías
                    as: 'categories',
                    through: { attributes: [] }, // No queremos datos de PlaceCategory
                    include: [
                        {
                            model: ParentCategory,
                            attributes: ['parent_category_name'], // Incluir categorías padres
                            as: 'ParentCategory',
                        },
                    ],
                },
            ],
            order: [['rating', 'DESC']], // Ordenar por puntaje descendente
            limit: 5, // Limitar a los 5 mejores
        });

        if (topPlaces.length === 0) {
            return res.status(404).json({ error: 'No places found for the given place type.' });
        }

        res.status(200).json(topPlaces);
    } catch (error) {
        console.error('Error fetching top places by type:', error);
        res.status(500).json({ error: 'Failed to fetch top places by type.' });
    }
};

exports.searchPlaceByName = async (req, res) => {
    try {
        const { name } = req.query; // Toma el parámetro de consulta (query)

        if (!name) {
            return res.status(400).json({ error: 'Place name is required' });
        }

        const places = await Place.findAll({
            where: {
                name: { 
                    [require('sequelize').Op.like]: `%${name}%` // Búsqueda parcial por nombre
                },
            },
            attributes: ['id', 'name'], // Solo selecciona el id y el name
        });

        if (places.length === 0) {
            return res.status(404).json({ message: 'No places found with the given name' });
        }

        res.status(200).json(places);
    } catch (error) {
        console.error('Error fetching places by name:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};