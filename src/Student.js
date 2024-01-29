function Student(props) {
    return (
        <div style={{backgroundColor:'yellow',margin:10}}>
            <h1>
                Hello!! {props.name}
            </h1>
            {/* <h2>
                Email : {props.email}
            </h2> */}
        </div>
    )
}

export default Student;