{
    const is_Fultime = 1;
    const is_Parttime = 2;
    const full_TimeHours = 8;
    const part_TimeHours = 4;
    const wage_PerHours = 20;

    let emphrs = 0;
    
    let empcheck = Math.floor(Math.random() * 10) % 3;
    switch (empcheck) {
        case is_Fultime:
            emphrs = full_TimeHours;
            break;
        case is_Parttime:
            emphrs = part_TimeHours;
            break;

        default:
            emphrs=0;
            break;
    }
    let empwage = emphrs * wage_PerHours;
      console.log(empwage)

}