import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const alamatParagraph = timeContainer.querySelector('div + p');
    const addressParagraph = timeContainer.querySelector('div + p + p');
    const mapAkad = timeContainer.querySelector('a');
    const mapResepsi = timeContainer.querySelector('a');

    // const createTimeListItem = (title, details) => (`
    //     <h3>${title}</h3>
    //     <p>
    //     ${details.day}, ${details.date} ${details.month} ${details.year}<br> 
    //     Pukul ${details.hours.start} WIB sd ${details.hours.finish} WIB<br>
    //     Bertempat di ${details.alamat.tempat}<br>
    //     ${details.alamat.lokasi}
    //     </p>

    // `);

    // const createAlamat = (info, alamat)=>(`
    //     <p>${info} ${alamat.lokasi}</p>
    //     `);

    //marriageDiv.innerHTML = createTimeListItem('Akad', data.time.marriage);
    //receptionDiv.innerHTML = createTimeListItem('Tasyakuran', data.time.reception);

    // alamatParagraph.textContent = data.time.tempat;

    // alamatParagraph.innerHTML = createAlamat('Bertempat di', data.time.tempat);

    // addressParagraph.textContent = data.time.address;
    // mapAkad.href = data.link.mapAkad;
    // mapResepsi.href = data.link.mapResepsi;
};
