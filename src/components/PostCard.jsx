import React from 'react';
import userIcon from '../assets/static/user-account.png';
import commentIcon from '../assets/static/icon-comment.png';
import likedIcon from '../assets/static/icon-heart-red.png';
import notLikedIcon from '../assets/static/icon-heart-outline.png';
import '../assets/styles/components/PostCard.scss';

const PostCard = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <div className="post-card">
      <div className="post-card--header">
        <a href="./profile.html?id=${post.userRef}">
          <img src={userIcon} alt="imagen del usuario del post" />
          <p>{post.userName} </p>
        </a>
      </div>
      <img className="post-card--img" src={post.imageUrl} alt="Imagen del post" />
      <div className ="post-card--footer-img">
      <a id="addPostLike-${post.id}"><img src={notLikedIcon} alt="icono de favorito" /></a>
      <a id="openPost-${post.id}"><img src={commentIcon} alt="" /></a>
      <p><span id="postLikes-${post.id}">{post.likes}</span> Me gusta</p>
      </div>
      <div className ="post-card--description">
      <h4>Descripcion</h4>
      <p><strong id="postCartDescriptionUserName-${post.id}"></strong>{post.description}</p>
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
