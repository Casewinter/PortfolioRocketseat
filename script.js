
const url = " https://api.github.com/users/Casewinter";
const repUrl = " https://api.github.com/users/Casewinter/repos";
function getUser(){
    axios.get(url)
    .then((response) => {
        const data = response.data
        console.log(data)
    })
    .catch((error) => {console.log(error)})
}
const getProfile = () => {
    axios.get(url)
    .then((response) => {
        const data = response.data
        let arrayData = [
            data.name,
            data.bio,
            data.company,
            data.html_url,
            data.twitter_username,
            data.blog,
            data.email,
         ]

        const verfiyValue = (arrayItem) =>{
            if(arrayItem === null){
                   arrayData[arrayData.indexOf(arrayItem)] = "Não cadastrado"
            }
        
        }
        arrayData.forEach(verfiyValue) 
          
        
        profileName.textContent = arrayData[0]
                bio.textContent = arrayData[1]
                work.textContent = arrayData[2]
                github.textContent = arrayData[3]
                twitter.textContent = arrayData[4]
                site.textContent = arrayData[5]
                email.textContent = arrayData[6]

                github.href = arrayData[3]
                site.href = arrayData[5]
    })
    .catch((error) => {console.log(error)})
}


const getPhoto = () => {
    axios.get(url)
    .then((response) => {
        const photo = response.data.avatar_url;
        profilePhoto.src = photo;
    })
    .catch((error) => {console.log(error)})
}

const getRep = () => {
    axios.get(repUrl)
    .then((response) => {
        const data = response.data
        console.log(data)

        const makenew = (arrayItem) => {
           const reps = document.querySelector('#reps')
            const repsFromGit = `
            <div class="cardsReps">
                <div>
                    <h1><a href="${arrayItem.html_url}">${arrayItem.name}</a></h1>
                    <p>${arrayItem.description}</p>
                        <div class="repsText">  
                        <span>Forks ${arrayItem.forks}</span> 
                        <span>Watchers ${arrayItem.watchers}</span>
                        <span>Language ${arrayItem.language}</span>
                        </div>
                    </div>
                </div>


            `
            reps.insertAdjacentHTML('beforeend', repsFromGit);
        }

     data.forEach(makenew)

    })
    .catch((error) => {console.log(error)})
}

getRep()
getUser()
getProfile()
getPhoto()
