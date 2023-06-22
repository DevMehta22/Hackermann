clicked=()=>{
    let user=document.getElementById("cont").value;
    display.innerHTML=`@${user} FOUND!!<br>`

const arr1=[ `#Starting hacking process...<br>`,

`#Starting hacking process...<br>`,

`#Starting hacking process...<br>`,

]

  

const arr2=[`>_ Loading files again...<br>`,

   `--libs/instagram/attack.py...<br>`,

   `--libs/instagram/attack-ddos.py...<br>`,

// //    `--libs/attack-server<br>.py<br>...<br>`,

   `--py/access/instagram/python-api.py...<br>`,

   `--py/access/instagram/hack-authentication.py...<br>`,

   `--cpp/instagram/issd.cpp...<br>`,

   `--cpp/instagram/injection-sun-ipc-server<br>.cp<br>p...<br>`,

   `--ruby/instagram/injection.rb...<br>`,

   `--#include includes/whatsapp/script-hack-1687343597588.php...<br>`]

  

const arr3=[`>_ #START ATTACK TO SERVER...<br>`,
`>_ #START ATTACK TO SERVER...<br>`,
`>_ #START ATTACK TO SERVER...<br>`,
`>_ #ATTACK: Waiting...<br>`,
`>_ #ATTACK: Waiting...<br>`,
`>_     ------ conference  531/udp chat<br>`,
`>_     ------ klogin   543/tcp<br>`,
`>_     ------ klogin   543/udp<br>`]

const arr4=[ `**************************************************<br>`,
            `<pre>             START FORCED LOGIN             </pre>`,    
            `**************************************************<br>`,

 `#ACCESS URL https: //www.instagram.com/accounts/login/ <br>`,



`#Trying access by IP 223.52.40.204`,
`>_ <br>Fail...<br>`,
`#Trying access by IP 27.132.200.151`,
`>_ <br>Fail...<br>`,
`#Trying access by IP 144.206.161.170`,
`>_ <br>Fail...<br>`,
`#Trying access by IP 106.228.169.255`,
`>_ <br>TRUE...<br>`,
`>_ Please wait...<br>`,
`>_ Please wait...<br>`,
`>_ Please wait...<br>`]

const arr5=[`>_ Accesing instagram account: ${user}<br>`,
`>_ Generate random password: ******************...<br>`,
`>_ Generate random password: ********************...<br>`,
`>_ Generate random password: *****************...<br>`,
`>_ Generate random password: ****************...<br>`,
`>_ Failed access...<br>`,
`>_ Generate random password: *******************...<br>`,
`>_ Generate random password: *****************...<br>`,
`>_ Generate random password: *******************...<br>`,
`>_ Generate random password: ********************...<br>`,
`>_ Failed access...<br>`,
`>_ Generate random password: ********************...<br>`,
`>_ Generate random password: *******************...<br>`,
`>_ Generate random password: ***************...<br>`,
`>_ Generate random password: *******************...<br>`,
`>_ Generate random password: ********************...<br>`,
`>_ Generate random password: ********************...<br>`,
`>_ Generate random password: *****************...<br>`,
`>_ TRUE ACCESS...<br>`,
`>_ Please wait...<br>`,
`>_ Please wait...<br>`]

const arr6=[`>_<br>  `,
`>_     ------ kshell   544/tcp krcmd<br>`,
`>_     ------ kshell   544/udp krcmd<br>`,
`>_     ------ new-rwho  550/tcp new-who<br>`,
`>_     ------ new-rwho  550/udp new-who<br>`,
`>_     ------ dsf    555/tcp<br>`,
`>_     ------ dsf    555/udp<br>`,
`>_     ------ remotefs  556/tcp rfs server<br>`]

const arr7=[
            `#1% Data extracted from ${user}<br>`,
            `#15% Data extracted from ${user}<br>`,
            `#25% Data extracted from ${user}<br>`,
            `#33% Data extracted from ${user}<br>`,
            `#67% Data extracted from ${user}<br>`,
            `#79% Data extracted from ${user}<br>`,
            `#97% Data extracted from ${user}<br>`,
            `100% completed....<br>`
        ]



const arr=[arr1,arr2,arr3,arr4,arr5,arr6,arr7]

const sleep=async(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },time)
    })
}
const showhack=async(message)=>{
    await sleep(50)
    display.innerHTML= display.innerHTML+message
    
}

(async()=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            await showhack(arr[i][j])

        }
    }
    await (async=()=>{
        final.innerHTML=`<b>Account Hacked..<br>Username:@${user}<br>Password:XXXXXXXXX</b>`
    })()
})()
   
}


