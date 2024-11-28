CREATE TABLE Itinerary (
    id SERIAL PRIMARY KEY, -- Identificador único del itinerario
    duration_days INT NOT NULL CHECK (duration_days > 0), -- Duración del itinerario en días, debe ser positiva
    user_id INT NOT NULL, -- Identificador del usuario (sin relación foránea por microservicios)
    name VARCHAR(255) NOT NULL, -- Nombre del itinerario
    num_people INT NOT NULL CHECK (num_people > 0) -- Número de personas, debe ser positivo
);

CREATE TABLE ItineraryPlace (
    id SERIAL PRIMARY KEY, -- Identificador único para cada registro
    itinerary_id INT NOT NULL, -- Identificador del itinerario
    place_id INT NOT NULL, -- Identificador del lugar (no es foránea debido a microservicios)
    start_time TIME NOT NULL, -- Hora de inicio
    end_time TIME NOT NULL, -- Hora de fin
    day_number INT NOT NULL CHECK (day_number > 0), -- Día dentro del itinerario, asegurando que sea un número positivo
    CONSTRAINT fk_itinerary FOREIGN KEY (itinerary_id) REFERENCES Itinerary (id) ON DELETE CASCADE
);
-- Inserts para la tabla Itinerary
INSERT INTO Itinerary (id, duration_days, user_id, name, num_people)
VALUES 
(1, 3, 101, 'Descubre Lima Histórica', 4),
(2, 2, 102, 'Gastronomía Limeña', 2),
(3, 5, 103, 'Aventuras en la Costa Verde', 3),
(4, 4, 104, 'Museos y Arte de Lima', 5),
(5, 1, 105, 'City Tour Exprés', 6);


-- Inserts para la tabla ItineraryPlace
INSERT INTO ItineraryPlace (id, itinerary_id, place_id, start_time, end_time, day_number)
VALUES 
-- Itinerary 1: Descubre Lima Histórica
(1, 1, 6, '10:00', '12:00', 1), -- Museo Larco
(2, 1, 7, '14:00', '16:00', 1), -- MALI
(3, 1, 8, '10:00', '12:00', 2), -- Museo Pedro de Osma
(4, 1, 9, '14:00', '16:00', 2), -- Museo Oro del Perú
(5, 1, 10, '10:00', '12:00', 3), -- MAC

-- Itinerary 2: Gastronomía Limeña
(6, 2, 1, '12:00', '13:30', 1), -- Tanta
(7, 2, 2, '15:00', '16:30', 1), -- Café de Lima
(8, 2, 3, '12:00', '13:30', 2), -- Siete Sopas
(9, 2, 4, '15:00', '16:30', 2), -- Barbarian

-- Itinerary 3: Aventuras en la Costa Verde
(10, 3, 11, '10:00', '12:00', 1), -- Vuelo en Parapente
(11, 3, 12, '14:00', '16:00', 1), -- Sandboarding en Lima
(12, 3, 15, '09:00', '11:00', 2), -- Trekking en Marcahuasi

-- Itinerary 4: Museos y Arte de Lima
(13, 4, 7, '10:00', '12:00', 1), -- MALI
(14, 4, 6, '14:00', '16:00', 1), -- Museo Larco
(15, 4, 8, '10:00', '12:00', 2), -- Museo Pedro de Osma
(16, 4, 10, '14:00', '16:00', 2), -- MAC
(17, 4, 9, '10:00', '12:00', 3), -- Museo Oro del Perú

-- Itinerary 5: City Tour Exprés
(18, 5, 13, '09:00', '11:00', 1), -- City Tour Cultural
(19, 5, 14, '12:00', '13:30', 1); -- Circuito Mágico del Agua
