//  https://css-tricks.com/how-to-make-charts-with-svg/

const CHART_WIDTH = 800
const CHART_HEIGHT = 600

export async function buildChart() {
    const nSvg = document.querySelector('#tSvgDiaryMeasures')
    nSvg.setAttribute('width', CHART_WIDTH)
    nSvg.setAttribute('height', CHART_HEIGHT)

    const diaryMeasures = await _retrieveDiaryMeasures()

    const quantityMeasures = diaryMeasures.length
    const maxMeasure = diaryMeasures.reduce((acc, cur) => cur.value > acc ? cur.value : acc, 0)

    const scaleWidth = (CHART_WIDTH - 100) / maxMeasure
    const scaleHeight = (CHART_HEIGHT - 100) / quantityMeasures

    diaryMeasures.forEach(renderMeasure)

    function renderMeasure(measure, i) {
        const nSvg = document.querySelector('#tSvgDiaryMeasures')

        const nGrpMeasure = document.createElementNS("http://www.w3.org/2000/svg", 'g')
        nSvg.appendChild(nGrpMeasure)
        nGrpMeasure.setAttribute('class', 'bar')

        const nRect = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
        nGrpMeasure.appendChild(nRect)
        nRect.setAttribute('width', scaleWidth * measure.value)
        nRect.setAttribute('height', scaleHeight)
        nRect.setAttribute('y', scaleHeight * i + 1 * i)

        const nText = document.createElementNS("http://www.w3.org/2000/svg", 'text')
        nGrpMeasure.appendChild(nText)
        nText.setAttribute('x', scaleWidth * measure.value + 10)
        nText.setAttribute('y', scaleHeight * i + 1 * i)
        nText.setAttribute('dy', '1em')

        const nTheText = document.createTextNode(measure.value)
        nText.appendChild(nTheText)

        // const nDivContainerGraph = document.querySelector('#tDivContainerGraph')

        // const nGrpDetails = document.createElement('div')
        // nDivContainerGraph.appendChild(nGrpDetails)
        // nGrpDetails.setAttribute('class', 'details')
        // nGrpDetails.style.left = `${scaleWidth * measure.value + 10}px`
        // nGrpDetails.style.top = `${scaleHeight * i + 1 * i}px`

        // const nDivHour = document.createElement('div')
        // nGrpDetails.appendChild(nDivHour)

        // const nTextHour = document.createTextNode(measure.hour)
        // nDivHour.appendChild(nTextHour)

        // const nDivValue = document.createElement('div')
        // nGrpDetails.appendChild(nDivValue)

        // const nTextValue = document.createTextNode(measure.value)
        // nDivValue.appendChild(nTextValue)

        const nGrpDetails = document.createElementNS("http://www.w3.org/2000/svg", 'g')
        nSvg.appendChild(nGrpDetails)
        nGrpDetails.setAttribute('class', 'details')
        
        const nRectDetails = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
        nGrpDetails.appendChild(nRectDetails)
        nRectDetails.setAttribute('width', 200)
        nRectDetails.setAttribute('height', 50)
        nRectDetails.setAttribute('x', scaleWidth * measure.value)
        nRectDetails.setAttribute('y', scaleHeight * i + 1 * i - 20)

        const nDivHour = document.createElementNS("http://www.w3.org/2000/svg", 'text')
        nGrpDetails.appendChild(nDivHour)
        nDivHour.setAttribute('x', scaleWidth * measure.value + 10)
        nDivHour.setAttribute('y', scaleHeight * i + 1 * i)

        const nTextHour = document.createTextNode(`Hora: ${measure.hour}`)
        nDivHour.appendChild(nTextHour)

        const nDivValue = document.createElementNS("http://www.w3.org/2000/svg", 'text')
        nGrpDetails.appendChild(nDivValue)
        nDivValue.setAttribute('x', scaleWidth * measure.value + 10)
        nDivValue.setAttribute('y', scaleHeight * i + 1 * i + 20)

        const nTextValue = document.createTextNode(`Demanda: ${measure.value}MW`)
        nDivValue.appendChild(nTextValue)
        
    }
}

async function _retrieveDiaryMeasures() {
    const response = await fetch('http://127.0.0.1/diary-measures')
    const data = await response.json()
    return data
}