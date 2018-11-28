function date(id)
{
   date = new Date;
   year = date.getFullYear();
   month = date.getMonth();
   months = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
   d = date.getDate();
   day = date.getDay();
   days = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
   result = 'Nous sommes le '+days[day]+' '+d+' '+months[month]+' '+year;
   document.getElementById(id).innerHTML = result;
   return result;     
}
