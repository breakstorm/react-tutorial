export default function Color({value}) {
    return (
        <div style={{
            display: 'flex'
            , justifyContent: 'center'
            , alignItems: 'center'

        }}>
            <div className="colorbox" style={{
                width: '100px'
                , height: '100px'
                , backgroundColor: value
            }}/>
        </div>
    )
}
