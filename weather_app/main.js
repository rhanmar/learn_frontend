const shuzenji_weather_data = {
    "coord": {
        "lon": 139,
        "lat": 35
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 283.88,
        "feels_like": 282.52,
        "temp_min": 283.88,
        "temp_max": 283.88,
        "pressure": 1011,
        "humidity": 58
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.76,
        "deg": 58,
        "gust": 5.14
    },
    "clouds": {
        "all": 0
    },
    "dt": 1647357046,
    "sys": {
        "type": 2,
        "id": 2019346,
        "country": "JP",
        "sunrise": 1647377649,
        "sunset": 1647420692
    },
    "timezone": 32400,
    "id": 1851632,
    "name": "Shuzenji",
    "cod": 200
}



ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [56.016, 92.87],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });
}
