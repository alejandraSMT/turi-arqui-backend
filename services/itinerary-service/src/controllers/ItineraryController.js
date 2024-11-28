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
