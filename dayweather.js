document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=manisa";

    async function dataSwitch() {
        const response = await fetch(`${apiUrl}&appid=${apiKey}`);
        const data = await response.json();

        let dailyData = {}; // Her gün için hava durumu verilerini saklamak için bir nesne oluşturun

        data.list.forEach(dateArr => {
            const date = new Date(dateArr.dt * 1000); // Unix zaman damgasını tarihe çevirin
            const day = date.toLocaleString("tr-TR", { weekday: "long" }); // Gün adını alın

            if (!dailyData[day]) {
                dailyData[day] = [];
            }

            dailyData[day].push({
                time: dateArr.dt_txt.split(" ")[1],
                weather: dateArr.weather[0],
                temp: dateArr.main.temp
            });
        });

        // İlk günün hava durumu kartını oluşturun
        const firstDayData = dailyData[Object.keys(dailyData)[0]];
        createCityCard(firstDayData);

        // Diğer günler için kartları oluşturun
        for (const day in dailyData) {
            if (day !== Object.keys(dailyData)[0]) {
                createDailyCard(day, dailyData[day]);
            }
        }
    }
})