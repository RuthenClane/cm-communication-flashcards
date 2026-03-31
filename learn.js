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
                title: "Modèle Thomas & Kilmann — Les 5 styles",
                icon: "grid",
                content: `
                <p style="color:var(--text-subtle); margin-bottom:1rem; font-size:0.9rem;">Le modèle croise <strong>assertivité</strong> (défense de ses propres intérêts) et <strong>coopération</strong> (prise en compte des intérêts de l'autre).</p>
                <div class="learn-table-wrap">
                    <table class="learn-table">
                        <thead>
                            <tr><th>Style</th><th>Assertivité</th><th>Coopération</th><th>Usage idéal</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="tag tag-red">Compétition</span></td>
                                <td>🔴 Haute</td><td>⬇️ Faible</td>
                                <td>Urgence, décision rapide nécessaire</td>
                            </tr>
                            <tr>
                                <td><span class="tag tag-green">Collaboration</span></td>
                                <td>🟢 Haute</td><td>🟢 Haute</td>
                                <td>Problème complexe, solution win-win souhaitée</td>
                            </tr>
                            <tr>
                                <td><span class="tag tag-yellow">Compromis</span></td>
                                <td>🟡 Moyenne</td><td>🟡 Moyenne</td>
                                <td>Contrainte de temps, équilibre acceptable</td>
                            </tr>
                            <tr>
                                <td><span class="tag tag-gray">Évitement</span></td>
                                <td>⬇️ Faible</td><td>⬇️ Faible</td>
                                <td>Enjeu mineur, attendre le bon moment</td>
                            </tr>
                            <tr>
                                <td><span class="tag tag-blue">Accommodement</span></td>
                                <td>⬇️ Faible</td><td>🔵 Haute</td>
                                <td>Préserver la relation, concéder sur un point</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">1</span><span>Les conflits ont <strong>4 types</strong> : interpersonnels, de valeurs, d'intérêts/objectifs, et sociaux.</span></div>
                    <div class="lr-item"><span class="lr-num">2</span><span><strong>Thomas & Kilmann</strong> : 5 styles — Compétition / Collaboration / Compromis / Évitement / Accommodement.</span></div>
                    <div class="lr-item"><span class="lr-num">3</span><span>La <strong>Collaboration</strong> est le style optimal sur le long terme (win-win), mais elle nécessite du temps.</span></div>
                    <div class="lr-item"><span class="lr-num">4</span><span>Un conflit non géré se résout rarement seul — il s'envenime.</span></div>
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
        intro: "Le modèle DiSC est un outil de développement personnel qui identifie 4 profils comportementaux. Il permet d'adapter sa communication à ses interlocuteurs.",
        sections: [
            {
                title: "Les 4 profils DiSC",
                icon: "pie-chart",
                content: `
                <div class="disc-grid">
                    <div class="disc-card disc-D">
                        <div class="disc-letter">D</div>
                        <div class="disc-name">Dominant</div>
                        <ul class="disc-traits">
                            <li>Direct & incisif</li>
                            <li>Orienté résultats</li>
                            <li>Décisif, compétitif</li>
                            <li>Aime les défis</li>
                        </ul>
                        <div class="disc-tip">Convaincre : aller droit au but, parler résultats</div>
                    </div>
                    <div class="disc-card disc-I">
                        <div class="disc-letter">I</div>
                        <div class="disc-name">Influent</div>
                        <ul class="disc-traits">
                            <li>Enthousiaste & sociable</li>
                            <li>Orienté relations</li>
                            <li>Optimiste, persuasif</li>
                            <li>Besoin de reconnaissance</li>
                        </ul>
                        <div class="disc-tip">Convaincre : valoriser l'humain, inclure dans le groupe</div>
                    </div>
                    <div class="disc-card disc-S">
                        <div class="disc-letter">S</div>
                        <div class="disc-name">Stable</div>
                        <ul class="disc-traits">
                            <li>Calme & patient</li>
                            <li>Orienté soutien</li>
                            <li>Loyal, fiable</li>
                            <li>Résiste au changement brusque</li>
                        </ul>
                        <div class="disc-tip">Convaincre : donner de la constance, expliquer le "pourquoi"</div>
                    </div>
                    <div class="disc-card disc-C">
                        <div class="disc-letter">C</div>
                        <div class="disc-name">Conforme</div>
                        <ul class="disc-traits">
                            <li>Analytique & précis</li>
                            <li>Orienté qualité</li>
                            <li>Méthodique, prudent</li>
                            <li>Craint l'erreur</li>
                        </ul>
                        <div class="disc-tip">Convaincre : fournir des données, être logique et structuré</div>
                    </div>
                </div>`
            },
            {
                title: "DiSC & Management",
                icon: "users",
                content: `
                <div class="learn-highlight-card" style="border-color:rgba(139,92,246,0.3);">
                    <div class="lhc-title">💡 Principe clé</div>
                    <p>Il n'y a pas de "bon" ou de "mauvais" profil. Chaque profil a ses forces et ses zones de vigilance. L'enjeu est d'<strong>adapter son style</strong> à celui de son interlocuteur.</p>
                </div>
                <div class="learn-list" style="margin-top:1rem;">
                    <div class="ll-item ll-positive">Connaître son profil = mieux comprendre ses réactions sous stress</div>
                    <div class="ll-item ll-positive">Identifier le profil de l'autre = adapter son discours et son rythme</div>
                    <div class="ll-item ll-positive">Un manager RH qui maîtrise le DiSC gère mieux les tensions interpersonnelles</div>
                    <div class="ll-item ll-warning">⚠️ Ne pas réduire une personne à son profil : le DiSC est un outil, pas une étiquette</div>
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">D</span><span><strong>Dominant</strong> : direct, résultats, décisif → parler chiffres et outcomes</span></div>
                    <div class="lr-item"><span class="lr-num">I</span><span><strong>Influent</strong> : relations, enthousiasme, reconnaissance → inclure et valoriser</span></div>
                    <div class="lr-item"><span class="lr-num">S</span><span><strong>Stable</strong> : calme, loyauté, stabilité → rassurer et expliquer</span></div>
                    <div class="lr-item"><span class="lr-num">C</span><span><strong>Conforme</strong> : précision, analyse, procédure → argumenter avec des données</span></div>
                </div>`
            }
        ]
    },

    // ── MODULE 4 ───────────────────────────────────────────────────────────
    4: {
        title: "Outils de communication & médiation",
        icon: "message-circle",
        color: "#22d3ee",
        colorBg: "rgba(34,211,238,0.1)",
        colorBorder: "rgba(34,211,238,0.25)",
        intro: "Ce module présente 3 outils puissants pour améliorer la communication, donner du feedback efficace et sortir des jeux relationnels toxiques.",
        sections: [
            {
                title: "Outil 1 — La CNV (Communication Non Violente)",
                icon: "heart-handshake",
                content: `
                <div class="tool-author">Auteur : <strong>Marshall Rosenberg</strong> · Années 1960</div>
                <p style="color:var(--text-subtle); margin-bottom:1.2rem; font-size:0.9rem;">La CNV permet d'exprimer ses besoins et d'écouter ceux de l'autre <strong>sans jugement</strong>, favorisant des solutions coopératives.</p>
                <div class="osbd-grid">
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(99,102,241,0.2); color:#818cf8;">O</div>
                        <div class="osbd-content">
                            <div class="osbd-title">Observation</div>
                            <p>Décrire les faits <strong>sans jugement</strong> ni évaluation</p>
                            <div class="osbd-ex">✅ "Tu as été absent 3 réunions ce mois."<br>❌ "Tu es irresponsable."</div>
                        </div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(236,72,153,0.2); color:#f472b6;">S</div>
                        <div class="osbd-content">
                            <div class="osbd-title">Sentiment</div>
                            <p>Exprimer ce que l'on ressent vraiment</p>
                            <div class="osbd-ex">✅ "Je me sens préoccupé et frustré."<br>❌ "Je sens que tu t'en fous."</div>
                        </div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(245,158,11,0.2); color:#fbbf24;">B</div>
                        <div class="osbd-content">
                            <div class="osbd-title">Besoin</div>
                            <p>Identifier le besoin sous-jacent au sentiment</p>
                            <div class="osbd-ex">✅ "J'ai besoin de fiabilité et de coordination."</div>
                        </div>
                    </div>
                    <div class="osbd-step">
                        <div class="osbd-letter" style="background:rgba(16,185,129,0.2); color:#34d399;">D</div>
                        <div class="osbd-content">
                            <div class="osbd-title">Demande</div>
                            <p>Formuler une demande <strong>concrète, positive et réalisable</strong></p>
                            <div class="osbd-ex">✅ "Peux-tu me prévenir 24h à l'avance si tu ne peux pas venir ?"</div>
                        </div>
                    </div>
                </div>`
            },
            {
                title: "Outil 2 — Le Radical Candor",
                icon: "message-square",
                content: `
                <div class="tool-author">Auteure : <strong>Kim Scott</strong> · Google & Apple</div>
                <p style="color:var(--text-subtle); margin-bottom:1.2rem; font-size:0.9rem;">Modèle de feedback basé sur 2 axes : se soucier de la personne ET oser lui dire la vérité.</p>
                <div class="radical-candor-matrix">
                    <div class="rc-axis rc-axis-y">Caring Personally →</div>
                    <div class="rc-grid">
                        <div class="rc-cell rc-top-left">
                            <div class="rc-name">Ruinous Empathy</div>
                            <p>On est gentil mais on ne dit pas la vérité → La personne ne progresse pas</p>
                        </div>
                        <div class="rc-cell rc-top-right rc-star">
                            <div class="rc-name">⭐ Radical Candor</div>
                            <p>On se soucie de la personne ET on lui dit franchement ce qui ne va pas</p>
                        </div>
                        <div class="rc-cell rc-bottom-left">
                            <div class="rc-name">Manipulative Insincerity</div>
                            <p>Ni caring ni honnête → manipulation passive</p>
                        </div>
                        <div class="rc-cell rc-bottom-right">
                            <div class="rc-name">Obnoxious Aggression</div>
                            <p>Honnête mais brutal → blesse sans construire</p>
                        </div>
                    </div>
                    <div class="rc-axis rc-axis-x">← Challenging Directly</div>
                </div>`
            },
            {
                title: "Outil 3 — Le Triangle de Karpman",
                icon: "triangle",
                content: `
                <div class="tool-author">Auteur : <strong>Stephen Karpman</strong> · Analyse Transactionnelle (1968)</div>
                <p style="color:var(--text-subtle); margin-bottom:1.2rem; font-size:0.9rem;">Décrit les jeux psychologiques toxiques dans les relations. Les 3 rôles sont <strong>interchangeables</strong> au sein d'une même situation.</p>
                <div class="karpman-triangle">
                    <div class="kt-role kt-persecuteur">
                        <div class="kt-icon">⚔️</div>
                        <div class="kt-name">Persécuteur</div>
                        <p>Attaque, accuse, blame, critique de façon destructrice</p>
                    </div>
                    <div class="kt-role kt-sauveur">
                        <div class="kt-icon">🛡️</div>
                        <div class="kt-name">Sauveteur</div>
                        <p>Aide de façon envahissante, non sollicitée, infantilise la victime</p>
                    </div>
                    <div class="kt-role kt-victime">
                        <div class="kt-icon">😔</div>
                        <div class="kt-name">Victime</div>
                        <p>Se plaint, subit, ne prend pas de responsabilités</p>
                    </div>
                </div>
                <div class="learn-tip" style="margin-top:1rem;">
                    <i data-lucide="arrow-right-circle"></i> <strong>Pour en sortir :</strong> Refuser d'endosser l'un des rôles. Communiquer de façon directe et adulte (CNV + Radical Candor).
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">CNV</span><span><strong>Rosenberg</strong> — Méthode OSBD : Observation (faits) → Sentiment → Besoin → Demande</span></div>
                    <div class="lr-item"><span class="lr-num">RC</span><span><strong>Kim Scott</strong> — Caring Personally + Challenging Directly = feedback honnête ET bienveillant</span></div>
                    <div class="lr-item"><span class="lr-num">△</span><span><strong>Karpman</strong> — 3 rôles toxiques : Persécuteur / Sauveteur / Victime. Sortir = posture adulte.</span></div>
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
        intro: "Tout changement organisationnel génère des réactions variées. La Stratégie des Alliés permet de cartographier les acteurs et de piloter l'adhésion.",
        sections: [
            {
                title: "Les 4 postures face au changement",
                icon: "users",
                content: `
                <div class="posture-grid">
                    <div class="posture-card posture-allie">
                        <div class="posture-icon">🚀</div>
                        <div class="posture-name">Alliés</div>
                        <div class="posture-sub">Forte synergie</div>
                        <p>Soutiennent activement le changement. Moteurs, ambassadeurs, premiers à embarquer.</p>
                        <div class="posture-action">Stratégie : <strong>mobiliser en priorité</strong></div>
                    </div>
                    <div class="posture-card posture-passif">
                        <div class="posture-icon">😐</div>
                        <div class="posture-name">Passifs</div>
                        <div class="posture-sub">Neutres</div>
                        <p>Ni pour ni contre. Attendent de voir. Suivront la tendance majoritaire.</p>
                        <div class="posture-action">Stratégie : <strong>informer et rassurer</strong></div>
                    </div>
                    <div class="posture-card posture-hesitant">
                        <div class="posture-icon">🤔</div>
                        <div class="posture-name">Hésitants</div>
                        <div class="posture-sub">Indécis</div>
                        <p>Ont des doutes légitimes. Peuvent devenir alliés si leurs questions sont répondues.</p>
                        <div class="posture-action">Stratégie : <strong>écouter et convaincre</strong></div>
                    </div>
                    <div class="posture-card posture-opposant">
                        <div class="posture-icon">🚫</div>
                        <div class="posture-name">Opposants</div>
                        <div class="posture-sub">Fort antagonisme</div>
                        <p>S'opposent activement. Peuvent bloquer si non gérés. Chercher la raison de l'opposition.</p>
                        <div class="posture-action">Stratégie : <strong>isoler et ne pas antagoniser</strong></div>
                    </div>
                </div>`
            },
            {
                title: "La Stratégie des Alliés",
                icon: "target",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">Principe</div>
                    <p>Plutôt que de tenter de convaincre les opposants en priorité (épuisant et contre-productif), on <strong>s'appuie sur les alliés</strong> pour créer une dynamique positive qui entraîne progressivement les autres.</p>
                </div>
                <div class="change-steps">
                    <div class="cs-step">
                        <div class="cs-num">1</div>
                        <div><strong>Cartographier</strong> tous les acteurs et les classer selon leur posture</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">2</div>
                        <div><strong>Mobiliser les Alliés</strong> — leur donner un rôle, des outils, de la visibilité</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">3</div>
                        <div><strong>Convertir les Hésitants</strong> grâce à la dynamique créée par les alliés</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">4</div>
                        <div><strong>Isoler les Opposants</strong> pour qu'ils ne rallient pas les indécis</div>
                    </div>
                </div>
                <div class="learn-tip">
                    <i data-lucide="alert-circle"></i> <strong>Erreur classique :</strong> commencer par convaincre les opposants. C'est une perte d'énergie qui ralentit tout le processus.
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">1</span><span><strong>4 postures</strong> : Alliés → Passifs → Hésitants → Opposants</span></div>
                    <div class="lr-item"><span class="lr-num">2</span><span>Commencer par mobiliser les <strong>Alliés</strong>, pas par convaincre les Opposants.</span></div>
                    <div class="lr-item"><span class="lr-num">3</span><span>Les <strong>Hésitants</strong> sont la cible prioritaire de conversion : ils manquent d'info, pas de volonté.</span></div>
                    <div class="lr-item"><span class="lr-num">4</span><span>La cartographie des acteurs est un outil RH concret, souvent présenté à l'examen.</span></div>
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
        intro: "Les Risques Psychosociaux (RPS) sont une obligation légale de prévention pour l'employeur. Comprendre les 3 niveaux de prévention et le cadre du DUERP est essentiel.",
        sections: [
            {
                title: "Qu'est-ce que les RPS ?",
                icon: "alert-octagon",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">Définition — RPS</div>
                    <p>Les <strong>Risques Psychosociaux</strong> désignent les risques professionnels qui affectent la santé mentale et physique des salariés, liés à l'organisation du travail, aux relations professionnelles et à l'environnement de travail.</p>
                </div>
                <div class="learn-grid-2" style="margin-top:1rem;">
                    <div class="learn-badge-card" style="--bc:#f43f5e">
                        <div class="bc-label">Stress chronique</div>
                        <p>Surcharge de travail, manque d'autonomie, objectifs irréalistes</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#f97316">
                        <div class="bc-label">Burn-out</div>
                        <p>Épuisement professionnel lié à un engagement excessif non reconnu</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#8b5cf6">
                        <div class="bc-label">Harcèlement</div>
                        <p>Moral (brimades répétées) ou sexuel (pressions à connotation sexuelle)</p>
                    </div>
                    <div class="learn-badge-card" style="--bc:#64748b">
                        <div class="bc-label">Violences au travail</div>
                        <p>Incivilités, agressions verbales ou physiques, violences internes/externes</p>
                    </div>
                </div>`
            },
            {
                title: "Les 3 niveaux de prévention",
                icon: "layers",
                content: `
                <div class="prevention-levels">
                    <div class="pl-level pl-primary">
                        <div class="pl-badge">Primaire</div>
                        <div class="pl-title">Agir sur la <em>source</em></div>
                        <p>Modifier l'organisation du travail pour supprimer ou réduire le risque à la racine.</p>
                        <div class="pl-ex">Ex : réorganiser les plannings, clarifier les rôles, améliorer les conditions de travail</div>
                    </div>
                    <div class="pl-level pl-secondary">
                        <div class="pl-badge">Secondaire</div>
                        <div class="pl-title">Aider les <em>individus exposés</em></div>
                        <p>Renforcer les ressources personnelles des salariés face aux risques identifiés.</p>
                        <div class="pl-ex">Ex : formations à la gestion du stress, ateliers de cohésion, coaching managers</div>
                    </div>
                    <div class="pl-level pl-tertiary">
                        <div class="pl-badge">Tertiaire</div>
                        <div class="pl-title">Soutenir en cas de <em>crise</em></div>
                        <p>Prendre en charge les personnes déjà touchées et réparer les dommages.</p>
                        <div class="pl-ex">Ex : cellule psychologique, accompagnement au retour après arrêt, médiation</div>
                    </div>
                </div>`
            },
            {
                title: "Plan de prévention en 5 étapes",
                icon: "list-checks",
                content: `
                <div class="change-steps">
                    <div class="cs-step">
                        <div class="cs-num">1</div>
                        <div><strong>Préparation</strong> — Constituer un groupe de travail, définir le périmètre</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">2</div>
                        <div><strong>Diagnostic</strong> — Évaluer l'exposition aux RPS (enquêtes, entretiens, absentéisme)</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">3</div>
                        <div><strong>Analyse</strong> — Identifier les facteurs de risque et les populations exposées</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">4</div>
                        <div><strong>Plan d'action</strong> — Définir des mesures concrètes, des responsables et des délais</div>
                    </div>
                    <div class="cs-step">
                        <div class="cs-num">5</div>
                        <div><strong>Suivi & évaluation</strong> — Mesurer l'efficacité des actions et ajuster</div>
                    </div>
                </div>`
            },
            {
                title: "Le DUERP & Cadre légal",
                icon: "file-text",
                content: `
                <div class="learn-definition">
                    <div class="ld-label">DUERP</div>
                    <p><strong>Document Unique d'Évaluation des Risques Professionnels</strong> — Obligatoire pour toute entreprise dès 1 salarié (Code du travail, art. R.4121-1). Les RPS doivent y être intégrés.</p>
                </div>
                <div class="learn-grid-2" style="margin-top:1rem;">
                    <div class="learn-highlight-card" style="border-color:rgba(244,63,94,0.3);">
                        <div class="lhc-title">📚 INRS — Guide ED6140</div>
                        <p>Référence méthodologique nationale pour la prévention des RPS en entreprise.</p>
                    </div>
                    <div class="learn-highlight-card" style="border-color:rgba(244,63,94,0.3);">
                        <div class="lhc-title">📚 AMELI — Guide T7</div>
                        <p>Guide de l'Assurance Maladie pour identifier et agir sur les facteurs de RPS.</p>
                    </div>
                </div>
                <div class="learn-tip" style="margin-top:1rem;">
                    <i data-lucide="alert-circle"></i> L'absence de DUERP expose l'employeur à des <strong>sanctions pénales</strong>. Son absence peut aussi constituer une faute inexcusable en cas d'accident.
                </div>`
            },
            {
                title: "À retenir absolument",
                icon: "bookmark",
                content: `
                <div class="learn-retenir">
                    <div class="lr-item"><span class="lr-num">1</span><span><strong>RPS</strong> = stress, burn-out, harcèlement, violences. Risque professionnel à part entière.</span></div>
                    <div class="lr-item"><span class="lr-num">2</span><span><strong>3 niveaux</strong> : Primaire (source) → Secondaire (individu exposé) → Tertiaire (crise)</span></div>
                    <div class="lr-item"><span class="lr-num">3</span><span><strong>5 étapes</strong> : Préparation → Diagnostic → Analyse → Plan d'action → Suivi</span></div>
                    <div class="lr-item"><span class="lr-num">4</span><span><strong>DUERP</strong> = obligation légale. Références : INRS (ED6140) et AMELI (T7)</span></div>
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
