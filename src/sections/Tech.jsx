import { technologies } from  "../constants";
import BallCanvas from "../components/BallCanvas";

function Tech() {
    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">Technologies</p>
            <div className="flex flex-row flex-wrap justify-center items-center mt-10 gap-10">
                {technologies.map((tech) => (
                    <div className="w-32 h-32 my-5" key={tech.name}>
                        <BallCanvas tech={tech} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tech;