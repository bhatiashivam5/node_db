module.exports = (sequelize,Sequelize)=>{
    const Role  = sequelize.define('Role',{
        role_id:{
            type:Sequelize.INTEGER,
            allowNULL:false,
            primaryKey:true
        },
        role_name:{
            type:Sequelize.STRING,
            allowNULL:false,
        },
      
    },{
        timestamps: false,
    }
    )
    return Role;
}

