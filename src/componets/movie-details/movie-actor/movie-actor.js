import CreateMovieActor from './create-movie-actor/create-movie-actor'
import './movie-actor.scss'


function MovieActor() {
    const a = [{
        name: "barev",
        photo: 'https://resizer.mail.ru/p/614d64e0-aad1-5e73-bf30-862513dfc0c4/AAACUSw4NYQyJQeHy7YhKeoQUZvS__1TI5tDHoFjA3FcAp67ths9lzr7tKAKZTfB_3P3sdpn7W0Bh7AfESH-beTZN-M.jpg',
        filmName: "Arev"
    },

    {
        name: "hajox",
        photo: 'https://resizer.mail.ru/p/614d64e0-aad1-5e73-bf30-862513dfc0c4/AAACUSw4NYQyJQeHy7YhKeoQUZvS__1TI5tDHoFjA3FcAp67ths9lzr7tKAKZTfB_3P3sdpn7W0Bh7AfESH-beTZN-M.jpg',
        filmName: "Karen",
    },
     {   name: "barev",
        photo: 'https://resizer.mail.ru/p/614d64e0-aad1-5e73-bf30-862513dfc0c4/AAACUSw4NYQyJQeHy7YhKeoQUZvS__1TI5tDHoFjA3FcAp67ths9lzr7tKAKZTfB_3P3sdpn7W0Bh7AfESH-beTZN-M.jpg',
        filmName: "Arev"
    },

    {
        name: "hajox",
        photo: 'https://resizer.mail.ru/p/614d64e0-aad1-5e73-bf30-862513dfc0c4/AAACUSw4NYQyJQeHy7YhKeoQUZvS__1TI5tDHoFjA3FcAp67ths9lzr7tKAKZTfB_3P3sdpn7W0Bh7AfESH-beTZN-M.jpg',
        filmName: "Karen",
    }
    ]
    return (
        <div className="movieActor">
            {a.map((element, i) => {
                return <CreateMovieActor key={i} name={element.name} photo={element.photo} filmName={element.filmName} />
            })}

        </div>
    )
}

export default MovieActor
