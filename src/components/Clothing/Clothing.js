import React from 'react';
import './Clothing.scss';

function Clothing(props) {
    const temp = props.temp;
    const main = props.main;
    const image = props.image;
    console.log(props)
    let clothes;
    if(temp === undefined){
        clothes = null;
    } else if(temp > 90 && main === "Clear") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>Sunglasses are another great way to keep the sun from your eyes on a run.</p>
            </span>
            <span>
                <img src="/icons/tank-top.png" alt="Tank-Top" />
                <p>On a hot day wearing a tank top can keep you cool while running.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/tank-top.png" alt="Tank-Top" />
                <p>On a hot day wearing a tank top can keep you cool while running.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Rain") {
        return clothes = 
        <div>
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a light rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Make sure to wear shorts that will dry quickly.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Drizzle") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are okay for the rain but also consider some track pants.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp > 90 && main === "Mist") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a misty day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp > 90 && main === "Fog") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a foggy day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp > 90 && main === "Haze") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a hazy day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on hot days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp > 90 && main === "Smoke") {
        return clothes = 
        <div className="smoke">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>It's looking a little smoky out there!!!</p>
        </div> 
    } else if(temp > 90 && main === "Thunderstorm" ) {
        return clothes =
        <div className="thunderstorm">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Caution thunderstorm in your area!!</p>
        </div>
    } else if(temp > 90 && main === "Tornado" ) {
        return clothes =
        <div className="tornado">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Tornado warning in your area!!</p>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Clear"){
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sun and sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>Sunglasses are another great way to keep the sun from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>Micro Fiber shirts are your best bet for a nice day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Of course most important of all, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Rain") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are okay for the rain but also consider some track pants.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt is great for today.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Of course most important of all, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Drizzle") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Might wanna grab a rain jacket.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are okay for the rain but also consider some track pants.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even if it is raining, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Mist") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a misty day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <= 89 && temp >= 60 && main === "Fog") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a foggy day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <= 89 && temp >= 60 && main === "Haze") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat from your eyes.</p>
            </span>
            <span>
                <img src="/icons/shirt.png" alt="Shirt" />
                <p>A microfiber shirt will keep you cool and dry on a hazy day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Shorts are perfect for this weather.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <= 89 && temp >= 60 && main === "Smoke") {
        return clothes = 
        <div className="smoke">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>It's looking a little smoky out there!!!</p>
        </div> 
    } else if(temp <= 89 && temp >= 60 && main === "Thunderstorm" ) {
        return clothes =
        <div className="thunderstorm" >
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Caution thunderstorm in your area!!</p>
        </div>
    } else if(temp <= 89 && temp >= 60 && main === "Tornado" ) {
        return clothes =
        <div className="tornado">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Tornado warning in your area!!</p>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Clear") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/sunglasses.png" alt="Sunglasses" />
                <p>It may be cold but the sun is still out!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie or jacket is recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Clouds") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie or jacket is recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Rain") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>Wear a beanie or something to keep your head warm.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p> Wear a rain jacket over your hoodie to stay warm and dry!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie is highly recommended.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants are your best bet for a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best shoes.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Even on cold days its important!! STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Drizzle") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/hat.png" alt="Hat" />
                <p>A good hat will keep the sweat & rain from your eyes.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Wear a rain jacket over your hoodie to stay warm and dry!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="hoodie" />
                <p>A hoodie will keep you warm on a cold misty day.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="pants" />
                <p>Track pants or any type of fast drying material would be best for this cold drizzly day..</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Maybe don't wear your best pair.</p>
            </span>
            <span>
                <img src="/icons/water.png" alt="Water" />
                <p>Water is a must have even on cold days, STAY HYDRATED!</p>
            </span>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Mist") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>A beanie will keep your head nice and warm during a cold misty day.</p>
            </span>
            <span>
                <img src="/icons/rainjacket.png" alt="Rain Jacket" />
                <p>Wear a rain jacket over your hoodie to stay warm and dry!</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="hoodie" />
                <p>A hoodie will keep you warm on a cold misty day.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants will keep your legs warm on a cold day but also consider track pants when it is misty.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have even on cold days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <=59 && temp >= 0 && main === "Fog") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>A beanie will keep your head nice and warm during a cold foggy day.</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie will keep you warm and dry on a foggy day.</p>
            </span>
            <span>
                <img src="/icons/pants.png" alt="Pants" />
                <p>Sweatpants will keep your legs warm during a cold day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have on even on cold days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <=59 && temp >= 0 && main === "Haze") {
        return clothes = 
        <div className="clothes-boxes">
            <span>
                <img src="/icons/beanie.png" alt="Beanie" />
                <p>A beanie will keep your head nice and warm during a cold hazy day.</p>
            </span>
            <span>
                <img src="/icons/hoodie.png" alt="Hoodie" />
                <p>A hoodie will keep you warm on a hazy day.</p>
            </span>
            <span>
                <img src="/icons/shorts.png" alt="Shorts" />
                <p>Sweatpants will keep your legs warm on a cold hazy day.</p>
            </span>
            <span>
                <img src="/icons/shoes.png" alt="Shoes" />
                <p>Don't forget your best pair of running shoes.</p>
            </span>
            <span>
                <img src="icons/water.png" alt="Water" />
                <p>Water is a must have even on cold days. STAY HYDRATED!</p>
            </span>
        </div> 
    } else if(temp <=59 && temp >= 0 && main === "Smoke") {
        return clothes = 
        <div className="smoke">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>It's looking a little smoky out there!!!</p>
        </div> 
    } else if(temp <=59 && temp >= 0 && main === "Thunderstorm" ) {
        return clothes =
        <div className="thunderstorm">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Caution thunderstorm in your area!!</p>
        </div>
    } else if(temp <=59 && temp >= 0 && main === "Tornado" ) {
        return clothes =
        <div className="tornado">
            <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt=""/>
            <p>Tornado warning in your area!!</p>
        </div>
    };

    return <div>
        {clothes}
    </div>
}

export default Clothing;
