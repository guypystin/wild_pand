import Recent from './Recent/Recent';
import classes from './RecentDialogs.module.css'
import react from 'react';

const RecentDialogs = (props)=> {
    
    // debugger;
    let infoMap = props.state.dialogsData.map( (el) => {
        if(el.id<4){
            return <Recent name = {el.name} id={el.id} />
        }
        
    })

    return(
        <div className={classes.recent__wrap}>
        <div className={classes.recent__text}>Недавние сообщения</div>
        <div className={classes.recent}>{infoMap}</div>
        </div>
    )
    
}

export default RecentDialogs ;