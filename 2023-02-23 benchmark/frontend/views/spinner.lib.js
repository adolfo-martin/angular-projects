const template = `
    <style>
        div.container-spinner {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            width: 100vw;
            height: 100vh;
            display: grid;
            place-content: center;
            background-color: rgba(0, 0, 0, 0.4);
            overflow: hidden;
        }
      
       .mainBox {
            width: 100px;
            height: 100px;
            background-color: blue;
            border-radius: 50%;
            overflow: hidden;
            position:relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        @keyframes spin {
            0%{
            transform: translateY(0px);
            -webkit-transform: translateY(0px);
        }
        100%{
            transform: translateY(-250px) rotate(360deg);
        }
    }

    .smallBox {
        min-width: 200%;
        min-height: 225%;
        border-radius: 30%;
        position: absolute;
        background-color: white;
        animation: spin 4s linear infinite alternate;
        z-index: 1;
    }
    </style>
    
    <div id="tDlgSpinner" class="container-spinner">
        <div class="mainBox">
            <div class="smallBox"></div>
        </div>
    </div id="">
`;

export function openSpinner() {
    const nDivContainer = document.createElement('div');
    nDivContainer.setAttribute('id', 'tDivContainerSpinner');
    nDivContainer.innerHTML = template;
    document.body.appendChild(nDivContainer);
}

export function closeSpinner() {
    document.body.removeChild(document.querySelector('#tDivContainerSpinner'));
}