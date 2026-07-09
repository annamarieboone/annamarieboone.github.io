<script>
    import TypeIt from "typeit";
    import { onMount } from "svelte";
    
    let typeitInstance;
    onMount(() => {
        typeitInstance = new TypeIt("#hero-typeit", {
            typeSpeed: 75,
            backSpeed: 75,
            loop: false,
            waitUntilVisible: true
        })

        .type("hi! i'm anna marie boone, a digital designer")
        .pause(500)
        .move(-9)
        .delete(7)
        .pause(150)
        .type("sometimes-print")
        .pause(500)
        .move(9)
        .delete(25)
        .type(" writer")
        .pause(500)
        .delete(7)
        .type("n edtior")
        .move(-2)
        .delete(2)
        .type("it")
        .move(2)
        .pause(500)
        .delete(8)
        .type(" visual journalist.")
        .go();
    });
</script>

<div class="hero">
    <div class="screen">
        <h1>
            <span id="hero-typeit"></span>
        </h1>
    </div>
    <div class="hero-intro">
        <div class="text-wrapper">
            <h3>I work at the <a href="https://www.startribune.com/" target="_blank" rel="noopener noreferrer   ">Minnesota Star Tribune,</a> wwhere I use code and persistence to build and tell visual stories.</h3>
            <h3>I teach at the <a href="https://www.stthomas.edu/" target="_blank" rel="noopener noreferrer">University of St. Thomas,</a> where I’m an adjunct professor in the Department of Emerging Media.</h3>
            <h3>My work has been honored by the Society for News Design (where I was a finalist for <a href="https://snd.org/snd-45-qa-words-best-designer-finalist-anna-boone/" target="_blank">World's Best Designer</a>), the <a href="https://www.pulitzer.org/winners/staff-star-tribune-minneapolis-minn" target="_blank">Pulitzer Prizes</a> and the <a href="https://www.headlinerawards.org/2021-online/&sa=D&source=editors&ust=1782402790033180&usg=AOvVaw1Azvq_Y32UDDMwJXtPWDir" target="_blank">National Headliner Awards.</a> I was also named <a href="https://www.startribune.com/q-a-with-star-tribune-digital-designer-anna-boone/600086806" target="_blank">Young Journalist of the Year</a> by the Minnesota chapter of the Society for Professional Journalists.</h3>
            <h3>I'm on the computer a lot for work, so when I'm not, I try to stay off of it — to varying degrees of success. I go on <a href="https://www.strava.com/athletes/5131081" target="_blank" rel="noopener noreferrer">runs with my dog</a> (who vastly outpaces me), speed-read book club books at the end of the month and knit.</h3>
        </div>
        <div class="images">
            <div class="image">
                <img src="/images/webps/mn_hot.webp">
                <!-- <p class="caption">That's me ✌️</p> -->
            </div>
        </div>
    </div>
</div>

<style>
    .desktop-break {
        display: block;
    }

    div.hero {
        position: relative;
        padding-bottom: 10rem;
        background: var(--light-gray);
    }

    div.images {
        width: 30%;
    }

    div.hero-intro {
        margin-top: 4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 85%;
        max-width: 1000px;
        margin: 0 auto;
        padding-top: 5em;
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

    div.screen {
        background: var(--light-gray);
        color: var(--background);
        width: 100%;
        height: 100vh;
        position: relative;
    }

    h1 {
        font-family: "Roboto Mono", sans-serif;
        font-weight: 600;
        font-size: 3.5em;
        letter-spacing: -0.025em;
        word-spacing: -0.05em;
        /* color: var(--light-gray); */
        max-width: 1000px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        min-height: 150px;
        width: 85%;
    }

    h1 span {
        max-width: 850px;
        display: block;
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
        color: white;
    }

    h3 a {
        font-family: "Roboto Mono";
        font-weight: 900;
        color: white;
        /* border-bottom: 1px solid white; */
        text-decoration: none;
    }
    h3 a:hover {
        font-family: "Roboto Mono";
        font-weight: 900;
        color: white;
        /* border-bottom: 1px solid white; */
        text-decoration: underline;
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
            /* width: 85%; */
        }
        div.hero-intro {
            margin-top: 2rem;
            padding-top: 0em;
            flex-direction: column;
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
        div.hero-intro {
            margin-top: 2rem;
            flex-direction: column-reverse;
        }

        /* div.text-wrapper {
            width: 100%;
        }
        div.images {
            width: 100%;
        }  */

        h1 {
            font-size: 2em;
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