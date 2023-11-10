document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=manisa";

    async function dataSwitch() {
        const response = await fetch(`${apiUrl}&appid=${apiKey}`);
        const data = await response.json();

        let dailyData = {};

        data.list.forEach(dateArr => {

            if (!dailyData[day]) {
                dailyData[day] = [];
            }

            dailyData[day].push({
                time: dateArr.dt_txt.split(" ")[1],
                weather: dateArr.weather[0],
                temp: dateArr.main.temp
            });
        });

        const firstDayData = dailyData[Object.keys(dailyData)[0]];
        createCityCard(firstDayData);

        for (const day in dailyData) {
            if (day !== Object.keys(dailyData)[0]) {
                createDailyCard(day, dailyData[day]);
            }
        }
    }

    dataSwitch()
})
