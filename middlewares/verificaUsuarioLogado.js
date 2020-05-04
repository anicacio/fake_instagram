const VerificaUsuarioLogado = (req, res, next) => {

    // Se session não logada, redirect login
    if(!req.session.usuario) {
        res.redirect('/login?error=2');
    };
    //
    next();
};

module.exports =  VerificaUsuarioLogado;