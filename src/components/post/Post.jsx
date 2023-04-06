import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={require('../img/post1.jpg')} alt="" />

      <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
          </div>
              <span className="postTitle">Lorem ipsum dolor sit amet     
              </span>
              <hr />
              <span className="postDate">1 hour ago</span>
      </div>
              <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quia incidunt.
                 Odio ea sint, iusto quaerat animi maxime et laborum sapiente deleniti ipsa architecto 
                 cum tempore nobis aut consequuntur fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quia incidunt.
                 Odio ea sint, iusto quaerat animi maxime et laborum sapiente deleniti ipsa architecto 
                 cum tempore nobis aut consequuntur fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quia incidunt.
                 Odio ea sint, iusto quaerat animi maxime et laborum sapiente deleniti ipsa architecto 
                 cum tempore nobis aut consequuntur fugit.</p>
    </div>
  )
}

