import React from 'react';

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card--header">
        <a href="./profile.html?id=${post.userRef}">
          <img id="postCartHeaderUserImg-${post.id}" alt="imagen del usuario del post" />
          <p id="postCartHeaderUserName-${post.id}"> </p>
        </a>
      </div>
      <img className="post-card--img" src="${post.imageUrl}" alt="Imagen del post" />
      <div className ="post-card--footer-img">
      <a id="addPostLike-${post.id}"><img id="postLikeIcon-${post.id}" alt="icono de favorito" /></a>
      <a id="openPost-${post.id}"><img src="./assets/img/icon-comment.png" alt="" /></a>
      <p><span id="postLikes-${post.id}">${post.likes}</span> Me gusta</p>
      </div>
      <div className ="post-card--description">
      <h4>Descripcion</h4>
      <p><strong id="postCartDescriptionUserName-${post.id}"></strong> ${post.description}</p>
      </div>
      <div className ="post-card--comments">
      <h4>Comentarios</h4>
      <a id="openPostComment-${post.id}"></a>
      <div id="postComments-${post.id}"></div>
      </div>
      <div className ="post-card--add-comment">
      <input id="inputComment-${post.id}" className ="form__input" type ="text" placeholder="Agrega un comentario..." />
      <a id="addPostComment-${post.id}" >Publicar</a>
      </div>
    </div>
  );
}

export default PostCard;
