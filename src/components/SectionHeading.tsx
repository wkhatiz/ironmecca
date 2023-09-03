type SectionHeadingProps = {
    text: string;
}

function SectionHeading(props: SectionHeadingProps) {
    const {text} = props;

    return (  
        <h2 className = "w-full p-14 text-3xl font-bold ">
            {text}
        </h2>
    );
}

export default SectionHeading;