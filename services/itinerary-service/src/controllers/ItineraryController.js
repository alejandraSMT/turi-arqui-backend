const Itinerary = require('../model/Itinerary.js'); // Asegúrate de importar correctamente el modelo

exports.getItineraries = async (req, res) => {
    try {
        const { userId } = req.params; // Obtén el ID del usuario desde los parámetros

        // Verifica que userId esté presente
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // Busca todos los itinerarios asociados al userId
        const results = await Itinerary.findAll({
            where: { user_id: userId }, // Filtra por userId
        });

        // Si no se encuentran itinerarios
        if (results.length === 0) {
            return res.status(404).json({ error: "No itineraries found for this user" });
        }

        // Devuelve los itinerarios encontrados
        res.status(200).json(results);

    } catch (error) {
        console.error(error); // Muestra el error en la consola
        res.status(500).json({ error: "Can't get itineraries" }); // Devuelve un error genérico al cliente
    }
};

exports.createItinerary = async (req, res) => {
    try {
        const { duration_days, user_id, name, num_people } = req.body;

        // Validar los campos requeridos
        if (!duration_days || !user_id || !name || !num_people) {
            return res.status(400).json({ error: 'All fields are required: duration_days, user_id, name, num_people' });
        }

        // Validar que duration_days y num_people sean positivos
        if (duration_days <= 0 || num_people <= 0) {
            return res.status(400).json({ error: 'duration_days and num_people must be positive numbers' });
        }

        // Crear el itinerario
        const newItinerary = await Itinerary.create({
            duration_days,
            user_id,
            name,
            num_people,
        });

        res.status(201).json({
            message: 'Itinerary created successfully',
            itinerary: newItinerary,
        });
    } catch (error) {
        console.error('Error creating itinerary:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};