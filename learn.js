// ════════════════════════════════════════════════
//  learn.js — Contenu des fiches d'apprentissage
// ════════════════════════════════════════════════

window.learnModules = {

    // ── MODULE 1 ───────────────────────────────────────────────────────────
    1: {
        title: "Communication & Émotions",
        icon: "heart",
        color: "#ec4899",
        colorBg: "rgba(236,72,153,0.1)",
        colorBorder: "rgba(236,72,153,0.25)",
        intro: "La communication en entreprise est indissociable des émotions. Comprendre cette dimension est une compétence stratégique fondamentale pour les RH.",
        sections: [
            {
                title: "Pourquoi les émotions comptent",
                icon: "sparkles",
                content: `
                <div class="learn-grid-2">
                    <div class="learn-highlight-card" style="border-color:rgba(236,72,153,0.3);">
                        <div class="lhc-title">🎯 Enjeu stratégique RH</div>
                        <p>La gestion émotionnelle influence directement la <strong>motivation</strong>, la <strong>cohésion d'équipe</strong> et la <strong>performance collective</strong>.</p>
                    </div>
                    <div class="learn-highlight-card" style="border-color:rgba(236,72,153,0.3);">
                        <div class="lhc-title">📡 Impact sur la communication</div>
                        <p>Les émotions modifient la <strong>perception</strong> et la <strong>compréhension</strong> des messages. Un même discours peut être reçu très différemment selon l'état émotionnel.</p>
                    </div>
                </div>`
            },
            {
                title: "Communication & Climat social",
                icon: "wind",
                content: `
                <div class="learn-key-point">
                    <i data-lucide="quote" class="lkp-icon"></i>
                    <blockquote>"La communication est le vecteur du climat social en entreprise."</blockquote>
                </div>
                <div class="learn-list">
                    <div class="ll-item ll-positive">La qualité des échanges façonne l'atmosphère de travail</div>
                    <div class="ll-item ll-positive">L'écoute active et l'empathie réduisent les tensions</div>
                    <div class="ll-item ll-negative">Ignorer les émotions génère des incompréhensions et des conflits</div>
                    <div class="ll-item ll-negative">On ne peut <em>pas</em> séparer dimension rationnelle et émotionnelle</div>
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">1</span><span>Les émotions sont <strong>toujours présentes</strong> dans la communication, même quand on croit être purement rationnel.</span></div>
                    <div class="lr-item"><span class="lr-num">2</span><span>La gestion émotionnelle est une <strong>compétence managériale</strong> qui s'apprend et se développe.</span></div>
                    <div class="lr-item"><span class="lr-num">3</span><span>Un bon manager RH reconnaît et régule ses propres émotions avant de gérer celles des autres.</span></div>
                </div>`
            }
        ]
    },

    // ── MODULE 2 ───────────────────────────────────────────────────────────
    2: {
        title: "Gestion des conflits",
        icon: "zap",
        color: "#f59e0b",
        colorBg: "rgba(245,158,11,0.1)",
        colorBorder: "rgba(245,158,11,0.25)",
        intro: "Le conflit est une réalité inévitable en organisation. Bien géré, il peut être un levier de changement ; mal géré, il détériore le climat et la performance.",
        sections: [
            {
                title: "Définition & Types de conflits",
                icon: "alert-triangle",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">Définition</div>
                    <p><strong>Incompatibilité d'intérêts, d'objectifs ou de valeurs</strong> entre individus ou groupes au sein d'une organisation.</p>
                </div>
                <div class="learn-grid-2" style="margin-top:1rem;">
                    <div class="learn-badge-card" style="--bc:#6366f1">
                        <div class="bc-label">Interpersonnel</div>
                        <p>Entre deux individus (personnalités, styles, valeurs)</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#ec4899">
                        <div class="bc-label">De valeurs</div>
                        <p>Divergences profondes d'éthique ou de croyances</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#f59e0b">
                        <div class="bc-label">D'intérêts / objectifs</div>
                        <p>Compétition pour des ressources ou des priorités</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#10b981">
                        <div class="bc-label">Social</div>
                        <p>Collectif : salariés vs direction, grève, négociation</p>
                    </div>
                </div>
                <div class="learn-tip">
                    <i data-lucide="lightbulb"></i> Un conflit n'est pas forcément négatif : bien régulé, il révèle des dysfonctionnements et peut être un moteur de changement.
                </div>`
            },
            {
                title: "Modèle Thomas & Kilmann",
                icon: "grid",
                content: `
                <p style="color:var(--text-subtle); margin-bottom:1rem; font-size:0.9rem;">Le modèle croise <strong>assertivité</strong> (satisfaction de ses propres besoins) et <strong>coopération</strong> (satisfaction des besoins de l'autre).</p>
                <div class="learn-image-wrap">
                    <img src="./thomas-kilmann.png" alt="Matrice Thomas-Kilmann" class="learn-img">
                </div>
                <div class="learn-table-wrap" style="margin-top:1.5rem;">
                    <table class="learn-table">
                        <thead>
                            <tr><th>Style</th><th>Assertivité</th><th>Coopération</th><th>Objectif</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><span class="tag tag-red">Compétition</span></td><td>🔴 Haute</td><td>⬇️ Faible</td><td>Gagner (Assertif)</td></tr>
                            <tr><td><span class="tag tag-green">Collaboration</span></td><td>🟢 Haute</td><td>🟢 Haute</td><td>Résoudre (Win-Win)</td></tr>
                            <tr><td><span class="tag tag-yellow">Compromis</span></td><td>🟡 Moyenne</td><td>🟡 Moyenne</td><td>Partager (Entente mutuelle)</td></tr>
                            <tr><td><span class="tag tag-gray">Évitement</span></td><td>⬇️ Faible</td><td>⬇️ Faible</td><td>Différer (Retrait)</td></tr>
                            <tr><td><span class="tag tag-blue">Acceptation</span></td><td>⬇️ Faible</td><td>🔵 Haute</td><td>Céder (Maintenir la relation)</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "L'escalade du conflit (Friedrich Glasl)",
                icon: "trending-down",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">Le Modèle de Glasl</div>
                    <p>Friedrich Glasl décrit le conflit comme une <strong>descente en 9 étapes</strong>. Plus le conflit s'intensifie, plus la raison laisse place aux émotions, puis à la destruction pure.</p>
                </div>
                <div class="learn-image-wrap" style="margin-top:1rem;">
                    <img src="./glasl-escalation.png" alt="Modèle Glasl escalade" class="learn-img">
                </div>
                <div class="prevention-levels" style="margin-top:1.5rem;">
                    <div class="pl-level" style="background:rgba(16,185,129,0.1); border-left:4px solid #10b981;">
                        <div class="pl-badge" style="background:#10b981;">Niveau 1 : GAGNANT-GAGNANT</div>
                        <p>Étapes 1-3. Tensions, Débat et Passage à l'action. La résolution est encore possible par le dialogue.</p>
                    </div>
                    <div class="pl-level" style="background:rgba(245,158,11,0.1); border-left:4px solid #f59e0b;">
                        <div class="pl-badge" style="background:#f59e0b;">Niveau 2 : GAGNANT-PERDANT</div>
                        <p>Étapes 4-6. Alliances, Dénigrement et Menaces. On veut gagner et que l'autre perde.</p>
                    </div>
                    <div class="pl-level" style="background:rgba(244,63,94,0.1); border-left:4px solid #f43f5e;">
                        <div class="pl-badge" style="background:#f43f5e;">Niveau 3 : PERDANT-PERDANT</div>
                        <p>Étapes 7-9. Destructions et Annéantissement. Volonté de détruire même au prix de ses propres intérêts.</p>
                    </div>
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">1</span><span><strong>Thomas & Kilmann</strong> : 5 styles basés sur l'Assertivité et la Coopération.</span></div>
                    <div class="lr-item"><span class="lr-num">2</span><span><strong>Glasl</strong> : 9 étapes d'escalade. Phase 1 (Win-Win), Phase 2 (Win-Lose), Phase 3 (Lose-Lose).</span></div>
                    <div class="lr-item"><span class="lr-num">3</span><span>Plus on descend l'escalier de Glasl, plus il faut l'aide d'un tiers (médiateur, juge).</span></div>
                </div>`
            }
        ]
    },

    // ── MODULE 3 ───────────────────────────────────────────────────────────
    3: {
        title: "Connaissance de soi — DiSC",
        icon: "user",
        color: "#8b5cf6",
        colorBg: "rgba(139,92,246,0.1)",
        colorBorder: "rgba(139,92,246,0.25)",
        intro: "Le modèle DiSC identifie 4 profils comportementaux pour adapter sa communication à ses interlocuteurs.",
        sections: [
            {
                title: "Les 4 profils DiSC",
                icon: "pie-chart",
                content: `
                <div class="disc-grid">
                    <div class="disc-card disc-D">
                        <div class="disc-letter">D</div>
                        <div class="disc-name">Dominant</div>
                        <ul class="disc-traits"><li>Direct & résultats</li><li>Décisif, compétitif</li><li>Aime les défis</li></ul>
                        <div class="disc-tip">Convaincre : aller droit au but, parler résultats</div>
                    </div>
                    <div class="disc-card disc-I">
                        <div class="disc-letter">I</div>
                        <div class="disc-name">Influent</div>
                        <ul class="disc-traits"><li>Enthousiaste & sociable</li><li>Optimiste, persuasif</li><li>Besoin de reconnaissance</li></ul>
                        <div class="disc-tip">Convaincre : valoriser l'humain, inclure dans le groupe</div>
                    </div>
                    <div class="disc-card disc-S">
                        <div class="disc-letter">S</div>
                        <div class="disc-name">Stable</div>
                        <ul class="disc-traits"><li>Calme & patient</li><li>Loyal, fiable</li><li>Résiste au changement brusque</li></ul>
                        <div class="disc-tip">Convaincre : rassurer, expliquer le "pourquoi"</div>
                    </div>
                    <div class="disc-card disc-C">
                        <div class="disc-letter">C</div>
                        <div class="disc-name">Conforme</div>
                        <ul class="disc-traits"><li>Analytique & précis</li><li>Méthodique, prudent</li><li>Craint l'erreur</li></ul>
                        <div class="disc-tip">Convaincre : fournir des données, être logique</div>
                    </div>
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">D</span><span><strong>Dominant</strong> : direct, résultats, décisif.</span></div>
                    <div class="lr-item"><span class="lr-num">I</span><span><strong>Influent</strong> : relations, enthousiasme, reconnaissance.</span></div>
                    <div class="lr-item"><span class="lr-num">S</span><span><strong>Stable</strong> : calme, loyauté, stabilité.</span></div>
                    <div class="lr-item"><span class="lr-num">C</span><span><strong>Conforme</strong> : précision, analyse, procédure.</span></div>
                </div>`
            }
        ]
    },

    // ── MODULE 4 ───────────────────────────────────────────────────────────
    4: {
        title: "Outils de communication",
        icon: "message-circle",
        color: "#22d3ee",
        colorBg: "rgba(34,211,238,0.1)",
        colorBorder: "rgba(34,211,238,0.25)",
        intro: "Ce module présente 3 outils puissants : la CNV, le Radical Candor et le Triangle de Karpman, pour améliorer la communication et sortir des jeux relationnels toxiques.",
        sections: [
            {
                title: "Violences visibles & invisibles",
                icon: "eye-off",
                content: `
                <div class="learn-grid-2">
                    <div class="learn-highlight-card" style="border-color:rgba(34,211,238,0.3);">
                        <div class="lhc-title">👁️ Violences Visibles</div>
                        <p>Critiques, jugements, reproches, hausse de ton. Facilement identifiables mais directement destructrices.</p>
                    </div>
                    <div class="learn-highlight-card" style="border-color:rgba(34,211,238,0.3);">
                        <div class="lhc-title">🌫️ Violences Invisibles</div>
                        <p>Silence, retrait, répression des émotions, sarcasme, non-dits. Elles bloquent la communication tout autant.</p>
                    </div>
                </div>`
            },
            {
                title: "Outil 1 — CNV (Marshall Rosenberg)",
                icon: "heart-handshake",
                content: `
                <div class="learn-grid-2" style="margin-bottom:1.2rem;">
                    <div class="learn-badge-card" style="--bc:#f43f5e">
                        <div class="bc-label">🐺 Posture CHACAL</div>
                        <p>Jugement, comparaison, exigence. On veut avoir raison et contrôler l'autre.</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#10b981">
                        <div class="bc-label">🦒 Posture GIRAFE</div>
                        <p>Empathie, bienveillance, expression authentique. On cherche la connexion.</p>
                    </div>
                </div>
                <div class="osbd-grid">
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(99,102,241,0.2); color:#818cf8;">O</div>
                        <div class="osbd-content"><div class="osbd-title">Observation (Faits Neutres)</div><p>Décrire la situation comme une caméra, sans interprétation ni jugement.</p></div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(236,72,153,0.2); color:#f472b6;">S</div>
                        <div class="osbd-content"><div class="osbd-title">Sentiment</div><p>Exprimer son état interne ("Je me sens...") plutôt qu'un jugement déguisé.</p></div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(245,158,11,0.2); color:#fbbf24;">B</div>
                        <div class="osbd-content"><div class="osbd-title">Besoin</div><p>Identifier le besoin universel non satisfait (respect, autonomie, clarté).</p></div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(16,185,129,0.2); color:#34d399;">D</div>
                        <div class="osbd-content"><div class="osbd-title">Demande</div><p>Formuler une demande <strong>Concrète, Positive et Réalisable</strong>.</p></div>
                    </div>
                </div>`
            },
            {
                title: "Outil 2 — Radical Candor (Kim Scott)",
                icon: "message-square",
                content: `
                <div class="learn-image-wrap" style="background:#fff; padding:10px;">
                    <img src="./radical-candor.png" alt="Matrice Radical Candor" class="learn-img">
                </div>
                <div class="learn-table-wrap" style="margin-top:1rem;">
                    <table class="learn-table">
                        <thead><tr><th>Quadrant</th><th>Axe Relationnel</th><th>Impact</th></tr></thead>
                        <tbody>
                            <tr><td><span class="tag tag-green">Radical Candor</span></td><td>❤️ Se soucie</td><td>🚀 Progression</td></tr>
                            <tr><td><span class="tag tag-yellow">Empathie toxique</span></td><td>❤️ Se soucie</td><td>😴 Stagnation</td></tr>
                            <tr><td><span class="tag tag-red">Hypocrisie manipulatrice</span></td><td>🧊 Indifférence</td><td>📉 Perte confiance</td></tr>
                            <tr><td><span class="tag tag-yellow">Agressivité contre-productive</span></td><td>🧊 Indifférence</td><td>🛡️ Braquage</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Outil 3 — Triangle de Karpman & Évolutif",
                icon: "triangle",
                content: `
                <div class="tool-author">Auteur : <strong>Stephen Karpman</strong></div>
                <div class="learn-image-wrap" style="background:#fff; padding:10px;">
                    <img src="./Triangle de Karpman.png" alt="Le Triangle Dramatique" class="learn-img">
                </div>
                <div class="learn-image-wrap" style="background:#fff; padding:10px; margin-top:1rem;">
                    <img src="./sortir-triangle.png" alt="Passer au Triangle Évolutif" class="learn-img">
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">CNV</span><span><strong>OSBD</strong> : Observation → Sentiment → Besoin → Demande.</span></div>
                    <div class="lr-item"><span class="lr-num">RC</span><span><strong>Radical Candor</strong> : Caring Personally + Challenging Directly.</span></div>
                    <div class="lr-item"><span class="lr-num">△</span><span><strong>Karpman</strong> : Sortir du drame par la responsabilisation (CRÉATEUR).</span></div>
                </div>`
            }
        ]
    },

    // ── MODULE 5 ───────────────────────────────────────────────────────────
    5: {
        title: "Accompagnement au changement",
        icon: "trending-up",
        color: "#10b981",
        colorBg: "rgba(16,185,129,0.1)",
        colorBorder: "rgba(16,185,129,0.25)",
        intro: "Tout changement organisationnel génère des réactions variées. La Stratégie des Alliés permet de transformer les rapports de force en notre faveur.",
        sections: [
            {
                title: "Pourquoi cette stratégie ? (Les constats)",
                icon: "help-circle",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">Le constat fondamental</div>
                    <p>La réussite d'un projet dépend plus de la <strong>gestion humaine</strong> que de la gestion technique (outils, process).</p>
                </div>
                <div class="learn-list" style="margin-top:1rem;">
                    <div class="ll-item ll-info"><strong>Résistance</strong> : Tout changement génère inévitablement des résistances (peur, habitude, perte de pouvoir).</div>
                    <div class="ll-item ll-info"><strong>Diversité</strong> : Chacun réagit différemment selon sa personnalité, sa fonction et sa situation.</div>
                    <div class="ll-item ll-info"><strong>Influence</strong> : L'influence de chaque personne varie selon son réseau et sa place dans l'organisation.</div>
                </div>
                <div class="learn-tip" style="margin-top:1rem;">
                    <i data-lucide="target"></i> <strong>L'enjeu :</strong> Anticiper pour gérer les résistances <em>avant</em> qu'elles ne deviennent des blocages irrémédiables.
                </div>`
            },
            {
                title: "Cartographie des Acteurs",
                icon: "users",
                content: `
                <div class="tool-author">Sociodynamique (Jean-Christian Fauvet)</div>
                <div class="learn-image-wrap" style="background:#fff; padding:10px;">
                    <img src="./quatre-postures.png" alt="Les 4 postures du changement" class="learn-img">
                </div>`
            },
            {
                title: "Stratégie d'Action",
                icon: "target",
                content: `
                <div class="learn-list">
                    <div class="ll-item ll-positive"><strong>Mobiliser les Alliés</strong> : Ce sont vos ambassadeurs. Donnez-leur des moyens et de la reconnaissance pour créer une dynamique positive.</div>
                    <div class="ll-item ll-warning"><strong>Convertir les Hésitants</strong> : C'est là que se joue le succès. Ils suivent le mouvement majoritaire une fois suffisamment rassurés.</div>
                    <div class="ll-item ll-info"><strong>Neutraliser les Opposants</strong> : Traiter leurs objections factuelles sans dépenser trop d'énergie.</div>
                    <div class="ll-item ll-negative"><strong>Ignorer les Irréductibles</strong> : Ne perdez aucune énergie sur eux. Ils s'adapteront ou partiront quand le changement deviendra la norme.</div>
                </div>`
            }
        ]
    },

    // ── MODULE 6 ───────────────────────────────────────────────────────────
    6: {
        title: "Prévention des RPS",
        icon: "shield",
        color: "#f43f5e",
        colorBg: "rgba(244,63,94,0.1)",
        colorBorder: "rgba(244,63,94,0.25)",
        intro: "Les RPS sont un enjeu légal et humain majeur. Une démarche globale, multidisciplinaire et structurée en 6 phases est nécessaire pour les prévenir efficacement.",
        sections: [
            {
                title: "Enjeux & Approche Multidisciplinaire",
                icon: "shield-alert",
                content: `
                <div class="learn-grid-2">
                    <div class="learn-highlight-card" style="border-color:rgba(244,63,94,0.3);">
                        <div class="lhc-title">⚖️ Enjeu Légal</div>
                        <p>Obligation de sécurité de résultat. Intégration obligatoire dans le <strong>DUERP</strong> (dès 1 salarié).</p>
                    </div>
                    <div class="learn-highlight-card" style="border-color:rgba(244,63,94,0.3);">
                        <div class="lhc-title">🩺 Approche Plurielle</div>
                        <p>RH, Médecin du travail, Psychologue, CSE, Direction. Aucun acteur ne peut agir seul.</p>
                    </div>
                </div>`
            },
            {
                title: "Les 6 Phases de la Démarche",
                icon: "list-checks",
                content: `
                <div class="detailed-phases">

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">1</div>
                            Organisation &amp; Gouvernance
                            <span class="dp-phase-label">Préparer</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Acteurs internes</strong> : Mobilisation de la Direction, du CSE et des salariés pour collecter les informations sur les conditions de travail.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Acteurs externes</strong> : Appui d'experts (médecin du travail, consultants) pour une analyse objective et indépendante.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Le COPIL</strong> : Comité de Pilotage qui supervise le suivi, la coordination et valide toutes les décisions stratégiques.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Pérennité</strong> : Garantir l'engagement, la légitimité et la continuité de la démarche sur le long terme.</span></div>
                        </div>
                    </div>

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">2</div>
                            Clarification des objectifs
                            <span class="dp-phase-label">S'accorder</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Socle commun</strong> : Créer un terrain d'entente partagé entre toutes les parties prenantes pour éviter les tensions.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Motivations</strong> : Définir clairement les raisons du processus (incidents, plaintes, ou objectifs stratégiques).</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Unités de travail</strong> : S'accorder sur les périmètres d'analyse fidèles à l'organisation réelle du travail.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Dialogue social</strong> : Établir un cadre précisant les règles, modalités de communication et engagements de chacun.</span></div>
                        </div>
                    </div>

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">3</div>
                            Diagnostic des risques
                            <span class="dp-phase-label">Repérer</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Collecte de données</strong> : Analyse des indicateurs RH et santé-sécurité pour détecter les tensions potentielles.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Exploration</strong> : Observations du travail réel et entretiens pour identifier les "signaux faibles".</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Analyse statistique</strong> : Questionnaires standardisés (ex. <strong>Karasek</strong>) pour identifier les populations exposées.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Déterminants RPS</strong> : Analyse de la charge de travail, des marges de manœuvre et du soutien social.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Cartographie des risques</strong> : Résumé des résultats qui sert de base à l'élaboration du plan d'action.</span></div>
                        </div>
                    </div>

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">4</div>
                            Construction de solutions
                            <span class="dp-phase-label">Élaborer</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Co-construction</strong> : Groupes de travail paritaires pour élaborer des solutions validées par le COPIL.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Prévention Primaire</strong> : Agir sur les causes organisationnelles — améliorer le travail et clarifier les rôles.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Prévention Secondaire</strong> : Renforcer les capacités individuelles via formation et gestion du stress.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Prévention Tertiaire</strong> : Soutien psychologique et dispositifs de réintégration pour les personnes affectées.</span></div>
                        </div>
                    </div>

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">5</div>
                            Mise en œuvre concrète
                            <span class="dp-phase-label">Appliquer</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Transformation</strong> : Les changements organisationnels et techniques deviennent concrets sur le terrain.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Gestion des résistances</strong> : Communication, formation et ateliers pour anticiper les blocages.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Rôle du management</strong> : Les managers régulent au quotidien et soutiennent leurs équipes durant la transition.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Ressources</strong> : La réussite dépend de la disponibilité des moyens matériels et humains adaptés.</span></div>
                        </div>
                    </div>

                    <div class="dp-item">
                        <div class="dp-header">
                            <div class="dp-num">6</div>
                            Suivi et évaluation
                            <span class="dp-phase-label">Piloter</span>
                        </div>
                        <div class="dp-body">
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Mesure des indicateurs</strong> : Indicateurs variés pour mesurer l'efficacité des actions et suivre les évolutions dans le temps.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Auto-évaluation</strong> : Réutiliser les outils du diagnostic pour évaluer l'évolution des risques et ajuster la démarche.</span></div>
                            <div class="dp-point"><span class="dp-diamond">◆</span><span><strong>Suivi longitudinal</strong> : Vérifier les objectifs, détecter de nouvelles problématiques et réorienter les actions si nécessaire.</span></div>
                        </div>
                    </div>

                </div>`
            },
            {
                title: "Méthodes d'Analyse (Modèles de référence)",
                icon: "layout",
                content: `
                <div class="learn-grid-2">
                    <div class="learn-highlight-card" style="border-color:rgba(244,63,94,0.3);">
                        <div class="lhc-title">📊 Référentiel INRS ED6140</div>
                        <p>Analyse les RPS à travers <strong>7 familles de risques</strong>, incluant notamment l'intensité du travail et la reconnaissance.</p>
                    </div>
                    <div class="learn-highlight-card" style="border-color:rgba(99,102,241,0.3);">
                        <div class="lhc-title">⚖️ Modèle C2R (ANACT)</div>
                        <p>Explique la santé au travail par l'équilibre entre <strong>Contraintes</strong>, <strong>Ressources</strong> et <strong>Régulations</strong>. Souligne le rôle clé du contexte socio-économique et des relations professionnelles.</p>
                    </div>
                </div>`
            },
            {
                title: "Principes Fondamentaux",
                icon: "anchor",
                content: `
                <div class="learn-list">
                    <div class="ll-item ll-info"><strong>Approche systémique et pluridisciplinaire</strong> : La prévention nécessite une approche collective mobilisant l'ergonomie, la psychologie, le management et la santé au travail.</div>
                    <div class="ll-item ll-positive"><strong>Importance de la prévention primaire</strong> : Agir directement sur les conditions de travail pour réduire les risques à la source.</div>
                    <div class="ll-item ll-warning"><strong>Implication collective essentielle</strong> : La réussite dépend de l'engagement conjoint de la direction, des représentants du personnel et des salariés.</div>
                    <div class="ll-item ll-positive"><strong>Le travail comme levier de santé</strong> : Le travail n'est pas qu'un risque, il peut améliorer la santé et la performance en favorisant la coopération et les marges de manœuvre.</div>
                </div>`
            }
        ]
    }
};

// ── Render a learn module ──────────────────────────────────────────────────
window.renderLearnModule = function(moduleId) {
    const m = window.learnModules[moduleId];
    if (!m) return '';

    const sectionsHTML = m.sections.map((s, i) => `
        <div class="learn-section" style="animation-delay:${i * 0.07}s">
            <div class="ls-header">
                <i data-lucide="${s.icon}" class="ls-icon" style="color:${m.color}"></i>
                <h3 class="ls-title">${s.title}</h3>
            </div>
            <div class="ls-body">${s.content}</div>
        </div>
    `).join('');

    return `
        <div class="learn-module-header" style="border-color:${m.colorBorder}; background:${m.colorBg};">
            <div class="lmh-icon" style="background:${m.colorBg}; border-color:${m.colorBorder};">
                <i data-lucide="${m.icon}" style="color:${m.color}; width:28px; height:28px;"></i>
            </div>
            <div>
                <div class="lmh-num" style="color:${m.color};">Module ${moduleId}</div>
                <h2 class="lmh-title">${m.title}</h2>
                <p class="lmh-intro">${m.intro}</p>
            </div>
        </div>
        <div class="learn-sections">
            ${sectionsHTML}
        </div>
        <div class="learn-cta">
            <button class="btn btn-primary" id="go-quiz-btn" data-module="${moduleId}">
                <i data-lucide="layers"></i> Tester ce module en révision
            </button>
        </div>
    `;
};
