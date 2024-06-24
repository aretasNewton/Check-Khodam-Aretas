function cekKhodam(event){
    event.preventDefault();
    let nama = $('#search').val();
    if(nama == ''){
        alert('GADA ORANGNYA MANA GW TAU')
    }else{
        let status = [
            'isi',
            'kosong'
        ]
        const randomStatus = Math.floor(Math.random()* status.length);
        if(randomStatus == 0){
            let khodam = [
                'Kosong',
                'Sendal Swallow',
                'Icikiwir',
                'Centong Bakso',
                'Kerupuk Nasgor',
                'Gerobak German',
                'Keyboard Mekanik',
                'Mio Mberrr',
                'Supra Bapak',
                'Senar Gitar',
                'Pengki',
                'Gagang Pintu',
                'Bubur Ayam',
                'Meja Makan',
                'Sucipto',
                'Getek Empang',
                'Ikan Cere',
                'Nasi Padang',
                'Kuri Ijo Kondangan',
                'Seblak Prasmanan',
                'Sprei Gratis',
                'Mas Anis',
                'Anggrek Mekar Pontianak',
                'Sambel Kacang',
                'Samsung J2 prime',
                'Sayur Asem',
                'Kuli Jawa',
                'Charger Type-C',
                'Cempedak',
                'Badut Mampang',
                'Tempe Goreng',
                'Sticker Jomok',
                'Sayur Lodeh',
                'Mendoan',
                'Lada HITAM',
                'Pohon Pisang Keramat',
                'Pantat Panci',
                'NAGA HITAM ASELI WONOGIRI',
                'Adudu',
                'Gedung DPR',
                'Dinamo Tamiya',
                'Tengkorak Berfikir',
                'Bus Lintas Sumatera',
                'Papan Karambol',
                'Bakso Urat',
                'Bebek Kunci Stang',
                'Kosong',
            ];
            const random = Math.floor(Math.random()* khodam.length);
            $('#result').html(`${nama.toUpperCase()} ~ Khodam Kamu ${khodam[random]}`);
            $('#search').val('');
        }
        // else{
            // $('#result').html(`${nama.toUpperCase()} ~ Khodam Kamu ${khodam[random]}`);
            // $('#search').val('');
        // }
    }
}

$(document).ready(function(){
    $('#btn-search').click(cekKhodam);
})
    