<script>
      export let nickname;
      export let name;
</script>
<div class="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://static.platzi.com/media/public/uploads/elmo002_25658817-f5c1-44b5-91c3-18f73d365073.jpg" alt="Memo Rdz">
        </div>
        <div class="Profile-info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
</div>

<!-- Profile.svelte -->

<style>
    .Profile-content {
      display: flex;
      align-items: center;
    }
    .Profile-avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile-info {
      margin: 0 0 0 0.5em;
    }
    .Profile-info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .Profile-info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>