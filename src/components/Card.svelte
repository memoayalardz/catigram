<script>
    import Comments from "./Comments.svelte";
    import Modal from "./Modal.svelte";
    import Share from "./Share.svelte";

    import {blur} from "svelte/transition";

    import {likeCount} from "../store/store.js";

    export let username;
    export let location;
    export let photo;
    export let postComment;
    export let comments;
    export let avatar;

    let isModal = false;
    let like = false;
    let bookmark = false;

    function handleModal(){
      isModal = !isModal;
    }

    function handleLike(){
      like = !like;
      if(like){
        likeCount.update(n => n + 1);
      }else{
        likeCount.update(n => n - 1);
      }
    }

</script>
<!-- Card.svelte -->

<style>
    .Card {
      border: 1px solid rgba(219, 219, 219, 1);
      border-radius: 4px;
      background-color: white;
      margin: 0 0 2em 0;
    }
    .Card-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
    }
    .Card-user {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .Card-user img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .Card-user h2 {
      margin: 0;
      padding: 0;
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 0 1em;
      color: black;
    }
    .Card-user h2 span {
      display: block;
      font-size: 12px;
      font-weight: normal;
      color: rgba(38, 38, 38, 0.7);
    }
    .Card-photo {
      padding: 0;
      margin: 0;
    }
    .Card-photo img {
      width: 100%;
      height: auto;
    }
    .Card-photo figure {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    .Card-settings i {
      cursor: pointer;
    }
    .Card-icons {
      padding: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .Card-icons i {
      margin: 0 1em 0 0;
      cursor: pointer;
      font-size: 20px;
    }
    .Card-icons i:last-child {
      margin: 0;
    }
    .Card-description {
      padding: 0 1em 1em 1em;
    }
    .Card-description h3 {
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
    .Card-description span {
      font-size: 14px;
    }
    .icon-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: inherit;
}
    .active-like {
      color: #bc1888;
      animation: bounce linear 0.8s;
      animation-iteration-count: 1;
      transform-origin: 20% 20%;
    }
    .active-bookmark {
      color: #f09433;
    }
  
    @keyframes bounce {
      0% {
        transform: translate(0px, 0px);
      }
      15% {
        transform: translate(0px, -25px);
      }
      30% {
        transform: translate(0px, 0px);
      }
      45% {
        transform: translate(0px, -15px);
      }
      60% {
        transform: translate(0px, 0px);
      }
      75% {
        transform: translate(0px, -5px);
      }
      100% {
        transform: translate(0px, 0px);
      }
    }
  </style>
<div class="Card">
  {#if isModal}
    <div transition:blur>
      <Modal>
        <Share on:click={handleModal}/>
      </Modal>
    </div>
  {/if}
    <div class="Card-container">
        <div class="Card-header">
            <div class="Card-user">
                <img src={avatar} alt={username}>
                <h2>{username}
                    <span>{location}</span>
                </h2>
            </div>
          </div>
            <div class="Card-settings">
                <i class="fa-solid fa-elipsis-h"></i>
            </div>
            <div class="Card-photo">
                <figure on:dblclick={handleLike}>
                    <img src={photo} alt={username}>
                </figure>
            </div>
            <div class="Card-icons">
                <div class="Card-icons-first">
                    <button
                    type="button"
                    on:click={handleLike}
                    aria-label="Compartir"
                    class="icon-button"
                  >
                    <i class="fa-solid fa-heart" class:active-like={like}></i>
                  </button>

                    <button
                    type="button"
                    on:click={handleModal}
                    aria-label="Compartir"
                    class="icon-button"
                  >
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                  
                  
                  
                    
                </div>
            </div>
            <div class="Card-icons-second">
                <!-- <i class="fa-solid fa-bookmark" class:active-bookmark={bookmark} on:click={()=> bookmark = !bookmark}></i> -->
                <button
                type="button"
                on:click={() => bookmark = !bookmark}
                aria-label="Guardar en marcadores"
                class="icon-button"
              >
                <i class="fa-solid fa-bookmark" class:active-bookmark={bookmark}></i>
              </button>
              
            </div>
            <div class="Card-description">
                <h3>{username}</h3>
                <span>{postComment}</span>
            </div>
            <Comments {comments}/>
        </div>
    
</div>

