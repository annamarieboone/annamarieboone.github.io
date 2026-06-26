<script>
    import TypeIt from "typeit";
    import { onMount } from "svelte";
    
    let typeitInstance;
    onMount(() => {
        typeitInstance = new TypeIt("#hero-typeit", {
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            waitUntilVisible: true
        })
        .type("a digital designer")
        .pause(500)
        .move(-9)
        .delete(8)
        .pause(150)
        .type("n occasional print")
        .pause(500)
        .move(9)
        .delete(27)
        .type(" writer")
        .pause(500)
        .delete(7)
        .type("n edtior")
        .move(-2)
        .delete(2)
        .type("it")
        .move(2)
        .pause(500)
        .delete(6)
        .type("obsessive dog parent")
        .pause(500)
        .delete(22)
        .type(" visual journalist.")
        .go();
    });
</script>

<div class="hero">
    <h1>hi 👋 i&rsquo;m <span class="name">anna marie boone</span>,<br class="desktop-break">
        <span id="hero-typeit"></span>
    </h1>
    <div class="hero-intro">
        <div class="text-wrapper">
            <h3>I'm a designer at the <a href="https://www.startribune.com/" target="_blank" rel="noopener noreferrer   ">Minnesota Star Tribune,</a> where I use code and persistance to create visual stories.</h3>
            <h3>I'm an adjunct professor at the <a href="https://www.stthomas.edu/" target="_blank" rel="noopener noreferrer">University of St. Thomas,</a> where I teach an advanced media design course for the Department of Emerging Media.</h3>
            <h3>I'm on the computer a lot for both of those roles, so when I'm not working, I try to stay off of it. I do so by going for <a href="https://www.strava.com/athletes/5131081" target="_blank" rel="noopener noreferrer">runs with my dog</a> (who vastly outpaces me), speed-reading book club books at the end of the month and knitting sweaters.</h3>
            <h3>My work has been honored by the Society for News Design, where I was a finalist for <a href="https://snd.org/snd-45-qa-words-best-designer-finalist-anna-boone/" target="_blank">World's Best Designer</a>, the <a href="https://www.pulitzer.org/winners/staff-star-tribune-minneapolis-minn" target="_blank">Pulitzer Prizes</a> and the <a href="https://www.headlinerawards.org/2021-online/&sa=D&source=editors&ust=1782402790033180&usg=AOvVaw1Azvq_Y32UDDMwJXtPWDir" target="_blank">National Headliner Awards.</a> I was also named <a href="https://www.startribune.com/q-a-with-star-tribune-digital-designer-anna-boone/600086806" target="_blank">Young Journalist of the Year</a> by the Minnesota chapter of the Society for Professional Journalists.</h3>
        </div>
        <div class="images">
            <div class="image">
                <img src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/webps/mn_hot.webp">
                <p class="caption">That's me ✌️</p>
            </div>
            <!-- <div class="image vertical">
                <img src="https://raw.githubusercontent.com/annamarieboone/annamarieboone.github.io/master/images/webps/mn_cold.webp">
                <p class="caption">But it also looks like this!</p>
            </div> -->
        </div>
    </div>
    <div class="call-action">
        <p>There's a decent list of projects here — click each to read more.</p>
    </div> 
</div>

<style>
    .desktop-break {
        display: block;
    }

    div.hero {
        width: 80%;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 10em;
        position: relative;
    }

    div.images {
        width: 30%;
    }

    div.hero-intro {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    div.image.vertical {
        max-width: 60%;
    }

    div.hero img {
        width: 100%;
        border-radius: 20px;
    }

    div.call-action {
        margin-top: 1rem;
        padding-top: 1rem;
        /* border-top: 1px solid var(--light-gray); */
        text-wrap: balance;
    }

    h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
        font-size: 4.75em;
        letter-spacing: -0.03em;
        color: var(--light-gray);
        width: 95%;
    }

    div.text-wrapper {
        max-width: 700px;
        width: 65%;
    }

    h3 {
        font-weight: 300;
        font-size: 1.2em;
        line-height: 1.5em;
        margin-bottom: 1em;
        margin-top: 0;
        word-spacing: -0.15em;
        letter-spacing: -0.01em;
        text-wrap: pretty;
    }

    h3 a {
        font-family: "Roboto Mono";
        font-weight: 800;
        color: inherit;
        /* border-bottom: 1px solid var(--light-gray); */
        text-decoration: none;
        color: var(--light-gray);
    }
    p.caption {
        margin-top: 0.5em;
        text-align: center;
    }

    @media only screen and (max-width: 1100px) {
        .desktop-break {
            display: none;
        }
    }

    @media only screen and (max-width: 900px) {
        div.hero {
            width: 85%;
        }
        div.hero-intro {
            margin-top: 2rem;
            flex-direction: column-reverse;
        }

        div.text-wrapper {
            width: 100%;
        }
        div.images {
            width: 70%;
            margin-bottom: 2rem;
        }

        p.caption {
            text-align: left;
        }

        h1 {
            font-size: 3.7em;
            text-wrap: normal;
        }
    }

    @media only screen and (max-width: 600px){
        /* div.hero-intro {
            margin-top: 2rem;
            flex-direction: column-reverse;
        }

        div.text-wrapper {
            width: 100%;
        }
        div.images {
            width: 100%;
        } */

        h1 {
            font-size: 3em;
            min-height: 250px;
        }

        div.images {
            width: 100%;
            margin-bottom: 3rem;
            /* margin-top: 3rem; */
        }

        h3 {
            font-size: 1.1em;
        }

    }
</style>