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
    "name": "decimals",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "devedor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "quantidade",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "garantia",
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "investidor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "quantidade",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
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
    "name": "getInvestimento",
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
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
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
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var emprestimoEndereco = "0xfE347e5a32D81815763dE88Cc5C47F33865EbCdD";
var BKAIEndereco = "0xe5d2cBc299Ff1Af089528AD408C0a80f0B9aC890";
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
var mostrarInvestimentoBt = document.getElementById("mostrar_investimento");
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
            let bigNumber = _quantidade*10**18;
            let call = await emprestimo.methods.pegarEmprestado(BigInt(bigNumber)).send({from:account, value: 5*_quantidade*10**14});
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

async function getInvestimento(){
    {
        if(ethereum) {
            try {
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await emprestimo.methods.getInvestimento().call({from:account});
                call = call.toString();
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
async function sacarEth(){
    {
        if(ethereum) {
            try {
                let accounts = await ethereum.request({method:'eth_requestAccounts'});
                let account = accounts[0];
                let call = await emprestimo.methods.retirarFundos().call({from:account});
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
        console.log(response)
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

mostrarDividaBt.addEventListener('click', ()=>{
getDivida().then((response)=>{
    saldo.innerHTML = `Sua dívida é ${response/10**18} BKAI`;
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

mostrarInvestimentoBt.addEventListener('click', ()=>{
    getInvestimento().then((response)=>{
        saldo.innerHTML = `Seu investimento é ${response/10**18} BKAI`;
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

quitarDividaBt.addEventListener('click', async () => {
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
    pedirEmprestado(Number(input.value)).then((response)=>{
        console.log(response);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });


retirarInvestimentoBt.addEventListener('click', ()=>{
    retirarInvestimento().then((response)=>{
        console.log(response);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });

sacarEthBt.addEventListener('click', ()=>{
    sacarEth().then((response)=>{
        console.log(response);
        }).catch((err)=>{
            alert(err);
            console.log(err);
        });
    });