var web3 = new Web3(ethereum);
var emprestimoAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_taxaPagamento",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_taxaInvestimento",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_bkaiAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tempoMinimoInvestimento",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "bkaiAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "terms",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "taxaInvestimento",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "taxaPagamento",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tempoMinimoInvestimento",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_quantidade",
          "type": "uint256"
        }
      ],
      "name": "investir",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_quantidade",
          "type": "uint256"
        }
      ],
      "name": "pegarEmprestado",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "quitarDivida",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retirarInvestimento",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDivida",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "retirarFundos",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var BKAIAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var emprestimoEndereco = "0xAF0C7E0AeD2b3F702c4D1d7546E391b745FbF569";
var BKAIEndereco = "0xCe4bF07f9bBc1BC367F2Cb72c7CD680966015005";
let emprestimo = new web3.eth.Contract(emprestimoAbi, emprestimoEndereco);
let BKAI = new web3.eth.Contract(BKAIAbi, BKAIEndereco);
var conectarBtn = document.getElementById("conectar"); 
var input = document.getElementById("qnt");
var endereco = document.getElementById("end_BKAI"); 
var investirBt = document.getElementById("investir");
var pedirEmprestadoBt = document.getElementById("pedir_emprestado");
var quitarDividaBt = document.getElementById("quitar_divida");
var retirarInvestimentoBt = document.getElementById("retirar_investimento");
var mostrarDividaBt = document.getElementById("mostrar_divida");
var saldo = document.getElementById("saldo");
var sacarEthBt = document.getElementById("sacar_eth");    
endereco.innerHTML = BKAIEndereco;    

async function conectar(){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            alert ("Conectado!");
            console.log(account);
            return account;
        } catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }
}

async function aprovarTransferencia(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let sendCall = await BKAI.methods.approve(emprestimoEndereco, _quantidade).send({from:account});
            return sendCall;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function investir(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await emprestimo.methods.investir(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function pedirEmprestado(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let bigNumber = Number(_quantidade)*10**18;
            bigNumber = BigInt(bigNumber);
            let call = await emprestimo.methods.pegarEmprestado(bigNumber).send({from:account, value: _quantidade * 10 ** 16});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function quitarDivida()
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await emprestimo.methods.quitarDivida().send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function retirarInvestimento()
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await emprestimo.methods.retirarInvestimento().send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function getDivida(){
    {
        if(ethereum) {
            try {
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await emprestimo.methods.getDivida().call({from:account});
                call = call.toString();
                saldo.innerHTML = call/10**18;
                return call;
            } catch(err){
        alert('Error');
        console.log(err);
        }
        } else{
        alert('Por favor, instale a carteira');
        }
    }
}
conectarBtn.addEventListener('click', ()=>{
    conectar().then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

mostrarDividaBt.addEventListener('click', ()=>{
getDivida().then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

investirBt.addEventListener('click', async () => {
    let bigNumber = Number(input.value)*10**18;
    aprovarTransferencia(BigInt(bigNumber)).then((res1)=>{
        console.log(res1);
        investir(BigInt(bigNumber)).then((res)=>{
            console.log(res);
        }).catch((err2) => {
            console.log(err2);
        });
    }).catch((err1)=>{
        console.log(err1);
    });
});

pedirEmprestadoBt.addEventListener('click', ()=>{
    pedirEmprestado(input.value).then((response)=>{
        console.log(res1);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });

quitarDividaBt.addEventListener('click', async () => {
        let bigNumber = Number(input.value)*10**18;
        let divida = await getDivida();
        aprovarTransferencia(divida).then((res1)=>{
            console.log(res1);
            quitarDivida().then((res)=>{
                console.log(res);
            }).catch((err2) => {
                console.log(err2);
            });
        }).catch((err1)=>{
            console.log(err1);
        });
    });

pedirEmprestadoBt.addEventListener('click', ()=>{
    pedirEmprestado(input.value).then((response)=>{
        console.log(res1);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });


retirarInvestimentoBt.addEventListener('click', ()=>{
    retirarInvestimento().then((response)=>{
        console.log(res1);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });
