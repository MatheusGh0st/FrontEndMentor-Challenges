<script>
import { ref } from "vue";

export default {
    data() {
        const formDate = ref({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });

        return {
            formDate
        };
    },
    created() {
        this.countdown();
    },

    methods: {
        countdown() {
            // HARD CODE INPUT DATE
            const endDate = new Date("Oct 17, 2023 00:00:00");
            const date = new Date().getTime();

            const difference = endDate - date;

            const seconds = 1000;
            const minutes = seconds * 60;
            const hours = minutes * 60;
            const days = hours * 24;

            const timeDays = Math.floor(difference / days);
            const timeHours = Math.floor((difference % days) / hours);
            const timeMinutes = Math.floor((difference % hours) / minutes);
            const timeSeconds = Math.floor((difference % minutes) / seconds);

            this.formDate.days = timeDays;
            this.formDate.hours = timeHours;
            this.formDate.minutes = timeMinutes;
            this.formDate.seconds = timeSeconds;

            setInterval(() => {
                this.countdown();
            }, 1000);
        }
    }
}
</script>

<template>
    <div class="main-container">
        <div class="header-container">
            <h2>WE'RE LAUCHING SOON</h2>
        </div>
        <div class="countdown-container">
            <div class="time-container">
                <div>{{ formDate.days }}</div>
                <span>DAYS</span>
            </div>
            <div class="time-container">
                <div>{{ formDate.hours }}</div>
                <span>HOURS</span>
            </div>
            <div class="time-container">
                <div>{{ formDate.minutes }}</div>
                <span>MINUTES</span>
            </div>
            <div class="time-container">
                <div>{{ formDate.seconds }}</div>

                <span>SECONDS</span>
            </div>
        </div>
        <div class="footer-container">
            <img class="icon-img-1" src="../images/icon-facebook.svg">
            <img class="icon-img" src="../images/icon-pinterest.svg">
            <img class="icon-img" src="../images/icon-instagram.svg">
        </div>
    </div>
</template>

<style>
:root {
    --grayish-blue: hsl(237, 18%, 59%);
    --soft-red: hsl(345, 95%, 68%);
    --white: hsl(0, 0%, 100%);
    --dark-desaturated-blue: hsl(236, 21%, 26%);
    --very-dark-blue: hsl(235, 16%, 14%);
    --very-dark: hsl(234, 17%, 12%);
}

.footer-container {
    background-image: url("../images/pattern-hills.svg");
}

@font-face {
    font-family: RedHatBold;
    src: url("src/assets/fonts/RedHatText-Bold.ttf");
    font-weight: 700;
}

@font-face {
    font-family: RedHatRegular;
    src: url("src/assets/fonts/RedHatText-Regular.ttf");
    font-weight: 700;
}

.main-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-image: url("../images/bg-stars.svg");
    background-color: var(--very-dark-blue);
    width: 100%;
    height: 100%;
}

.header-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    color: var(--white);
    font-family: RedHatBold;
    letter-spacing: 0.5rem;
    font-size: 0.7rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: center;
    order: 0;
    width: 100%;
    padding-bottom: 20px;
}

.time-container {
    display: flex;
    gap: 15px;
    margin: 0px 20px 0px 20px;
    height: 160px;
    width: 130px;
}


.time-container {
    display: flex;
    gap: 15px;
    margin: 0px 20px 0px 20px;
    height: 160px;
    width: 130px;
}


.time-container> :first-child {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: var(--soft-red);
    font-family: RedHatBold;
    box-shadow: 1px 10px 2px -1px rgba(26, 26, 36, 0.96);
    border-radius: 5px;
    font-size: 4.5rem;
    background-color: var(--dark-desaturated-blue);
    height: 130px;
    width: 130px;
    border: 1px solid var(--dark-desaturated-blue);
}

.time-container> :not(:first-child) {
    font-family: RedHatBold;
    font-size: 0.7rem;
    letter-spacing: 0.3rem;
    color: var(--grayish-blue);
}

.countdown-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: center;
    order: 0;
    width: 100%;
}

.footer-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 30px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: center;
    order: 0;
    width: 100%;
}

.icon-img:hover {
    background-color: var(--soft-red);
    cursor: pointer;
}

.time-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>