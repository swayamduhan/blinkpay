export function Loader(){
    return (
        <div className="w-full h-full">
            <video autoPlay loop muted playsInline>
                <source src="/loaderanim.webm" type="video/webm" />
            </video>
        </div>
    )
}