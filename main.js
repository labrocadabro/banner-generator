import { unsplashKey } from "./apiKey.js";

const getPhotoButton = document.getElementById('get-photo');
const addTextButton = document.getElementById('add-text');
getPhotoButton.addEventListener('click', getPhoto);
addTextButton.addEventListener('click', addText);


async function getPhoto() {
	const page = Math.ceil(Math.random() * 100);
	const query = document.getElementById('photo-search').value.trim();
	const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${unsplashKey}`);
	const data = await res.json();
	console.log(res, data)
	const img = data.results[Math.floor(Math.random() * 10)];
	const bannerImg = document.getElementById('banner-img');
	const bannerCredits = document.getElementById('banner-credits');
	bannerImg.innerHTML = `<img src="${img.urls.raw}" alt="${img.alt_description}" />`;
	bannerCredits.innerHTML = `Photo by <a href="${img.user.links.html}?utm_source=banner_generator&utm_medium=referral">${img.user.name}</a> on <a href="https://unsplash.com/?utm_source=banner_generator&utm_medium=referral">Unsplash</a> | <a href="${img.links.download}">Download Image</a>`;
}

function addText() {
	const text = document.getElementById('text-value').value;
	const bannerText = document.getElementById('banner-text');
	console.log(bannerText)
	bannerText.innerHTML = text;
}