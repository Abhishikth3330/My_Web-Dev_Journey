function Users() {
    
    const data = [
        {
            id: 1, name:"ABC"
        },
        {
            id: 2, name:"DEF"
        },
        {
            id: 3, name:"GHI"
        }
    ];
    
    return(
        <>
            <p>
                {
                    data.map((user) => (
                        <p>{user.name}</p>
                    ))
                }
            </p>
        </>
    );
}

export default Users;