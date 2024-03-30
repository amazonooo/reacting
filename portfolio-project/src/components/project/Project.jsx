import './project.css'

const Project = (props) => {
    return (
			<li className='project'>
				<a href='./project-page.html'>
					<img src={props.img} alt='Project img' className='project__img' />
					<h3 className='project__title'>{props.title}</h3>
				</a>
			</li>
		)
}
 
export default Project;