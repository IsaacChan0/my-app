const ProjectHolder=function()
{
    return(
        <section class="projInline">
            <Proj gitURL="https://github.com/dunkstein/Pokemon-Typing" projectName="Pokemon Typing"
                gitImg="https://raw.githubusercontent.com/dunkstein/Pokemon-Typing/main/trashPokemon/images/preview.png"
                projectBody="A simple typing game developed in Greenfoot, a Java framework for games"
                projectDesc="Utilizes various data structures, including a stack implementation to add or remove typed characters" />
            
            <Proj gitURL="https://github.com/dunkstein/Caverneer" projectName="Caverneer"
                gitImg="https://raw.githubusercontent.com/dunkstein/Caverneer/main/images/TitleScreen.png"
                projectBody="Platformer developed in Greenfoot"
                projectDesc="Utilizes sorting algorithms to find max score and various classes to handle collision. Leverages arrays to
                store animation states" />
        </section>
    );
}

const Proj=function(props)
{
    return(
        <a class="boxLink" href={props.gitURL} target="_blank" rel="noopener noreferrer">
            <section class='projContainer'>
                <h3 id="projHeader">
                    {props.projectName}
                </h3>
                <img id="projImage" src={props.gitImg} alt={props.projectName}></img>
                <p id="projBody">
                    {props.projectBody}
                    <br></br>
                    <br></br>
                    {props.projectDesc}
                </p>
            </section>
        </a>
    );
}

export default ProjectHolder;