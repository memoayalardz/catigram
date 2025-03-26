<script>
    import { onMount } from 'svelte';
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import TimeLine from "../components/TimeLine.svelte";
    import Sidebar from "../components/Sidebar.svelte";

    let data = {
"user": {
"nickname": "luislirac",
"name": "Luis Lira"
},
"posts": [
{
"username": "Thurston Waffles",
"location": "Guadalajara, México",
"avatar": "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1649003498619910~c5_720x720.jpeg",
"photo": "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1649003498619910~c5_720x720.jpeg",
"like": false,
"bookmark": false,
"postComment": "Miaaaw!!",
"comments": [
{
"id": 123234535,
"text": "Hello Thurston!",
"username": "Grumpy"
},
{
"id": 1232322312,
"text": "❤",
"username": "Venus"
}
]
},
{
"username": "Venus",
"location": "Buenos Aires, Argentina",
"avatar": "https://static.boredpanda.com/blog/wp-content/uploads/2015/06/two-faced-chimera-cat-venus-fb__700.jpg",
"photo": "https://static.boredpanda.com/blog/wp-content/uploads/2015/06/two-faced-chimera-cat-venus-fb__700.jpg",
"like": false,
"bookmark": false,
"postComment": "Happy day 🎉🎉",
"comments": [
{
"id": 123234535,
"text": "Miaaaaaw!!",
"username": "Thurston Waffles"
}
]
},
{
"username": "Hamilton",
"location": "Londrés, Reino Unido",
"avatar": "https://pbs.twimg.com/media/EGsNPXeUEAUbLV6.jpg",
"photo": "https://pbs.twimg.com/media/EGsNPXeUEAUbLV6.jpg",
"like": false,
"bookmark": false,
"postComment": "Watching my humans",
"comments": []
},
{
"username": "Nala",
"location": "Tokio, Japón",
"avatar": "https://i.pinimg.com/originals/79/f0/67/79f067569d6182cda2dcaa061667a434.jpg",
"photo": "https://i.pinimg.com/originals/79/f0/67/79f067569d6182cda2dcaa061667a434.jpg",
"like": false,
"bookmark": false,
"postComment": "Time to work",
"comments": []
},
{
"username": "Cooper",
"location": "Vacouver, Canadá",
"avatar": "https://www.catster.com/wp-content/uploads/2015/06/CooperUpdate8.jpg",
"photo": "https://www.catster.com/wp-content/uploads/2015/06/CooperUpdate8.jpg",
"like": false,
"bookmark": false,
"postComment": "Wth is this?...",
"comments": []
},
{
"username": "Shironeko",
"location": "Bogotá, Colombia",
"avatar": "https://static.boredpanda.com/blog/wp-content/uploads/2014/05/shironeko-happy-cat-23.jpg",
"photo": "https://static.boredpanda.com/blog/wp-content/uploads/2014/05/shironeko-happy-cat-23.jpg",
"like": false,
"bookmark": false,
"postComment": "This is life!",
"comments": []
}
]
};
    let API = "https://kittygram-api-lg7jjtvfh.now.sh/";

    // onMount(async ()=>{
    //     const response = await fetch(API);
    //     data = await response.json();
    // })

</script>

<Header/>
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user}/>
</Main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body){
        background-color: #fafafa;
        color:rgba(38,38,38,0.7);
        font-family: "Lato",sans-serif;
        margin:0;
        padding: 0;
    }
    :global(h1,h2,h3){
        margin:0;
        padding: 0;
    }
</style>