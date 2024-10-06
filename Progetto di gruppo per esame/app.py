from flask import Flask, render_template, request
from flask import redirect, url_for, session

class User:
    username = None
    password = None
    email = None

    def __init__(self, u, p, e):
        self.username = u
        self.password = p
        self.email = e

    def getUsername(self):
        return self.username
    
    def getPassword(self):
        return self.password
    
    def getEmail(self):
        return self.email
    
    def __repr__(self):
        return f'Utente: username {self.username}, password {self.password}, e-mail {self.email}'
    

antonio = User('antonio', '12345', 'antonio@itsrizzoli.it')
davide = User('davide', 'ciao', 'davide.longo@itsrizzoli.it')
aimane = User('aimane', 'khooya', 'aimane.jrada@itsrizzoli.it')
kristian = User('kristian', 'Marghe', 'kristian.salva@itsrizzoli.it')
alessandro = User('alessandro', 'yolo', 'alessandro.carbone@itsrizzoli.it')
moreno = User('moreno', 'torino', 'moreno.filograno@itsrizzoli.it')
listaUser = [davide, aimane, kristian, alessandro, moreno]

appWeb = Flask(__name__)

@appWeb.route('/listaUtenti')
def listaUtenti():
    return render_template('listaUtenti.html', paramList = listaUser)

@appWeb.route('/')
def home():
    return render_template('home.html', title = 'Pagina principale')

@appWeb.route('/index')
def index():
    return render_template('index.html')

# qui invece creo un controllo che gestisce la pagina admin per verificare l'utente loggato
# come amministratore lato server, il controllo poi verrà gestito dal file Javascript.

@appWeb.route('/admin')
def admin():
    if 'user_role' in session and session['user_role'] == 'admin':
        return render_template('admin.html')
    
    else:
        return redirect(url_for('login'))

@appWeb.route('/services')
def services():
    return render_template('services.html', title = 'Servizi')

@appWeb.route('/impostazioni')
def impostazioni():
    return render_template('impostazioni.html', title = 'Impostazioni')

@appWeb.route('/contact')
def contact():
    return render_template('contact.html', title = 'Contatti')

@appWeb.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', title = 'Dashboard')

@appWeb.route('/pagamenti')
def pagamenti():
    return render_template('pagamenti.html', title = 'Pagamenti')

@appWeb.route('/analisi_abbonamenti')
def analisi_abbonamenti():
    return render_template('analisi_abbonamenti.html', title = 'Analisi Abbonamenti')

@appWeb.route('/analisi_caselli')
def analisi_caselli():
    return render_template('analisi_caselli', title = 'Analisi Caselli')

@appWeb.route('/analisi_veicoli_utilizzati')
def analisi_veicoli_utilizzati():
    return render_template('analisi_veicoli_utilizzati.html', title = 'Analisi veicoli utilizzati')

@appWeb.route('/admin')
def admin():
    return render_template('admin.html')

@appWeb.route('/user')
def user():
    return render_template('user.html')

@appWeb.route('/login')
def login():
    return render_template('login.html')

@appWeb.route('/registrazione')
def registrazione():
    return render_template('registrazione.html')

@appWeb.route('/fail')
def fail():
    return render_template('fail.html')

@appWeb.route('/autenticazione', methods = ['POST'])
def autenticazione():
    usernameStr = request.form.get('username')
    passwordStr = request.form.get('password')
    #emailStr = request.form.get('email')
    for i in listaUser:
        u = i.getUsername()
        p = i.getPassword()
        #e = i.getEmail
        if u == usernameStr and p == passwordStr:
            return render_template('home.html', paramUser = usernameStr)
    return render_template('fail.html') # messo fuori perché altrimenti non finisce il ciclo for, e si ferma alla prima iterazione
    
@appWeb.route('/saveuser', methods = ['POST'])
def saveuser():
    usernameStr = request.form.get('username')
    passwordStr = request.form.get('password')
    emailstr = request.form.get('email')
    listaUser.append(User(usernameStr, passwordStr, emailstr))

    return render_template('listaUtenti.html', paramUser = usernameStr)
    
if __name__ == '__main__':
    appWeb.run(debug=True)