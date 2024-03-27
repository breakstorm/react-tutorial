const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Example2() {
    return (
        <>
            <section>
                <title>Quick Start Example 2</title>
                <h1>Example2</h1>
                <Profile/>
            </section>
        </>
    )
};

function Profile () {
    return (
        <>
            <h1>{user.name}</h1>
            <img className="avatar"
                 src={user.imageUrl}
                 alt={'photo of ' + user.name}
                 style={{
                     width: user.imageSize
                     ,height: user.imageSize
                 }}
            />
        </>
    );
}