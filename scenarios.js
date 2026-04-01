// ════════════════════════════════════════════════
//  scenarios.js — Études de cas "Mise en situation"
// ════════════════════════════════════════════════

window.allScenarios = [
    {
        id: "s-1",
        module: 4,
        title: "Le Retard Chronique (CNV)",
        context: "Un collaborateur arrive pour la 3ème fois en retard à la réunion d'équipe du lundi matin. L'ambiance est tendue et les autres se plaignent.",
        challenge: "Formulez une réponse en utilisant la méthode OSBD (Observation, Sentiment, Besoin, Demande) pour rétablir une communication constructive.",
        tool: "CNV (Marshall Rosenberg)",
        expertSolution: {
            o: "« J'ai observé que tu es arrivé avec 20 minutes de retard aux trois dernières réunions du lundi. »",
            s: "« Je me sens frustré et inquiet pour l'avancement de nos projets. »",
            b: "« J'ai besoin de fiabilité et de pouvoir compter sur la présence de tous pour coordonner le travail. »",
            d: "« Est-ce que tu serais d'accord pour arriver 5 minutes avant le début lundi prochain, ou y a-t-il un blocage dont on doit discuter ? »"
        },
        hint: "Évitez les jugements comme 'Tu es toujours en retard' ou 'Tu ne nous respectes pas'."
    },
    {
        id: "s-2",
        module: 3,
        title: "Conflit de Profils (DiSC)",
        context: "Marc (très orienté Résultats, direct) demande un rapport urgent à Sophie (très orientée Précision, analytique). Sophie refuse de lui donner car elle n'a pas encore fini de vérifier la 3ème décimale d'un tableau. Marc explose de colère.",
        challenge: "Identifiez les profils DiSC de Marc et Sophie et proposez une stratégie de médiation pour que chacun comprenne le besoin de l'autre.",
        tool: "Modèle DiSC",
        expertSolution: {
            analysis: "Marc est un profil **D (Dominant)** : il veut des résultats rapides. Sophie est un profil **C (Conforme)** : elle veut de l'exactitude parfaite.",
            strategy: "Expliquer à Marc que Sophie a besoin de sécurité sur ses données pour être efficace. Expliquer à Sophie que Marc a besoin d'une vision globale, même imparfaite, pour décider. Solution : Sophie donne une version provisoire à Marc maintenant, et la version finale vérifiée dans 2 heures."
        },
        hint: "Le profil C craint l'erreur, le profil D craint la perte de contrôle/temps."
    },
    {
        id: "s-3",
        module: 4,
        title: "La Feedback Brutal (Radical Candor)",
        context: "Après une présentation client ratée, vous entendez un manager dire à son équipe : « C'était nul, vous êtes des débutants, j'ai eu honte pour vous ! »",
        challenge: "Dans quel quadrant du Radical Candor se situe ce manager ? Re-formulez son feedback pour qu'il devienne de la 'Radical Candor'.",
        tool: "Radical Candor (Kim Scott)",
        expertSolution: {
            analysis: "Le manager est dans l'**Obnoxious Aggression** (Agression blessante) : il dit ce qu'il pense (Challenge Directly) mais sans aucun respect humain (Caring Personally).",
            reformulation: "« Je sais à quel point vous avez travaillé dur (Caring). Cependant, les slides 5 à 10 manquaient de clarté technique, ce qui a perdu le client (Challenge). Travaillons ensemble demain pour corriger ça. »"
        }
    },
    {
        id: "s-4",
        module: 4,
        title: "Le Triangle de Karpman au Bureau",
        context: "Julie se plaint à vous : « Encore une fois, Pierre m'a donné ses dossiers à finir. C'est injuste, je suis toujours celle qui ramasse les pots cassés ! ». Vous lui répondez : « Ne t'en fais pas, donne-les moi, je vais les finir pour toi à midi. »",
        challenge: "Identifiez les rôles de Julie et de vous-même dans cette situation. Comment auriez-vous pu répondre pour sortir du triangle ?",
        tool: "Triangle de Karpman",
        expertSolution: {
            analysis: "Julie est en position de **Victime**. Vous venez d'endosser le rôle du **Sauveteur** (en l'assistant sans qu'elle le demande vraiment, ce qui renforce sa victimisation).",
            exit: "Posture Adulte : « Je comprends ta frustration, Julie. Que comptes-tu dire à Pierre pour que cela ne se reproduise plus ? Je peux t'aider à préparer ton entretien avec lui si tu veux. »"
        }
    },
    {
        id: "s-5",
        module: 5,
        title: "Résistance au Changement",
        context: "L'entreprise installe un nouveau logiciel de gestion. Paul, expert métier depuis 20 ans, dit à tout le monde à la machine à café : « C'est une usine à gaz, ça va nous faire perdre un temps fou, moi je ne l'utiliserai pas. »",
        challenge: "Quelle est la posture de Paul dans la Stratégie des Alliés ? Quelle erreur de management faut-il éviter concernant Paul ?",
        tool: "Stratégie des Alliés",
        expertSolution: {
            analysis: "Paul est un **Opposant**. Il est dans l'antagonisme fort et cherche à influencer les autres.",
            avoidance: "L'erreur classique serait de passer 90% de son temps à essayer de convaincre Paul. Il faut d'abord mobiliser les **Alliés** pour créer une dynamique, puis isoler Paul pour qu'il n'entraîne pas les Hésitants."
        }
    }
];
