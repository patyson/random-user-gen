import ProjectTile from './ProjectTile'

const Home = (props) => {
    return (
        <>
            {props.state ? `You haven't added any projects yet.` : <ProjectTile />}
        </>
    )
}

export default Home
