import image from '../assets/post.jpg';

function Card (){
    return (
        <div className="card-container">
                <img src={image}/>
            <div className='card-body'>
                <h2>titlo del posto</h2>
                <p className='card-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, exercitationem? Dolores, ducimus. Delectus, aspernatur.</p>
                <button>leggi di piu</button>
            </div>
        </div>
    )
}
export default Card;