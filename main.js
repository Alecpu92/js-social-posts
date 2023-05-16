const postsContainer = document.getElementById("container");


let posts = [
    {
        "userName" : "Phil Mangione",
        "userPicture" : "https://unsplash.it/300/300?image=15",
        "postDate" : "05/11/21",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "https://unsplash.it/600/300?image=171",
        "likes" : 80
    },

    {
        "userName" : "Valy Mex",
        "userPicture" : "https://unsplash.it/300/300?image=50",
        "postDate" : "04/05/21",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "https://unsplash.it/600/300?image=77",
        "likes" : 10
    },

    {
        "userName" : "FluIdo",
        "userPicture" : "https://unsplash.it/300/300?image=27",
        "postDate" : "31/01/21",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "''",
        "likes" : 27
    },

    {
        "userName" : "Metallo",
        "userPicture" : "https://unsplash.it/300/300?image=47",
        "postDate" : "31/01/21",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "https://unsplash.it/300/300?image=52",
        "likes" : 97
    }
]

printPosts ();


let likeBtns = document.querySelectorAll(".js-like-button");
let likeCounter = document.querySelectorAll(".js-likes-counter");
console.log(likeBtns);

for(let i = 0; i < likeBtns.length; i++){

    likeBtns[i].addEventListener("click",

    function(){
        let indexLikes = posts[i].likes;
        if(this.className.includes("like-button--liked")){ 

            likeBtns[i].classList.remove("like-button--liked");

            likeCounter[i].innerHTML = indexLikes;

        }else{
            indexLikes += 1;

            likeCounter[i].innerHTML = indexLikes;
    
            likeBtns[i].classList.add("like-button--liked");
        }

    }
    );
}



function printPosts (){
    for (let i = 0; i < posts.length; i++){
        let indexPosts = posts[i];

        let {userName, userPicture, postDate, postText, likes, postImage} = indexPosts;
        
        printInHtml(userName, userPicture, postDate, postText, likes, i, postImage);
        console.log(postImage);
    }
}


function printInHtml(userName, userPicture, postDate, postText, likes, indexLikes, postImage){
    postsContainer.innerHTML += `

        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${userPicture} alt=${userName}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${userName}</div>
                        <div class="post-meta__time">${postDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src=${postImage} alt=""></img>
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${indexLikes}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${indexLikes}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
}