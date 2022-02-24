let res = window.document.querySelector('div.res')
function converter() {
    let m = Number(window.prompt('Digite uma distáncia em metros (m)'))
    res.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`

    let km = (m / 1000).toLocaleString('pt-BR')
    let hm = (m / 100).toLocaleString('pt-BR')
    let dam = (m / 10).toLocaleString('pt-BR')
    let dm = (m * 10).toLocaleString('pt-BR')
    let cm = (m * 100).toLocaleString('pt-BR')
    let mm = (m * 1000).toLocaleString('pt-BR')
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetricos (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
    
    /*
    res.innerHTML += `<p>${km = m / 1000} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm = m / 100} hectômetricos (Hm)</p>`
    res.innerHTML += `<p>${dam = m / 10} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm = m * 10} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm = m * 100} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm = m * 1000} milímetros (mm)</p>`
    */
}