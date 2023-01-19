const authPost=(req,res,next)=>{
    const {body} = req;
    
    if(Object.keys(body).length < 2 )return res.status(400).json({
        msg: ' datos invalidos'
    })
    next();
}

const authIdioma = (req,res,next)=>{
    const{idioma} = req.params;
    const{body} = req;
    if(idioma != 'es' && idioma != 'en' ) return res.status(400).json({
        msg: 'parametros invalidos'
    });
    if(Object.keys(body).length === 0  ) return res.status(400).json({
        msg: 'datos invalidos'
    });
    next();
}

const authLimit = (req,res,next) =>{
    const {num}=req.params;
    if(num > 10 )return res.status(400).json({
        msg:'Limite de conteo excedido tiene la posibilidad de obtener el conteo hasta 10.'
    });
    if(num == 0)return res.status(400).json({
        msg:'Limite tiene que ser mayor a cero.'
    });
    next();
}

module.exports={
    authPost,authIdioma,authLimit
}