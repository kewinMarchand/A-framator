$(function() {

    		var idObjet ;
    		var tool ;
    		var px ;
					var py ;
					var pz ;
					var rx ;
					var ry ;
					var rz;
					var la ;
					var lo ;
					var rad ;
					var clr ;
					var idObjet ;

    		/*Disparition du loader*/
    		$('#loader').fadeOut(1200);

    		/*On cache la fenêtre paramètres*/
			$('#reglages').hide();
			$('.params').hide();

    		/*au clic sur la scene :*/
    		$('#a-scene').on('click', function () {

    			/*On cache la fenêtre paramètres*/
				$('#reglages').hide();
				$('.params').hide();
    		})

    		/*au clic sur un bouton outil :*/
    		$('.outil').on('click', function () {

    			/*Attribution id aux fenêtres de réglage*/
    			$('#Couleur-primitive-container h2').attr('id', 'Couleur-primitive-titre');
    			$('#Couleur-primitive-container label').attr('id', 'Couleur-primitive-label');
    			$('#Couleur-primitive-container input').attr('id', 'Couleur-primitive-input');

    			$('#Position-primitive-container 2').attr('id', 'Position-primitive-titre');
    			$('#Position-primitive-container .labelsX').attr('id', 'Position-X-primitive-label');
    			$('#Position-primitive-container .inputsX').attr('id', 'Position-X-primitive-input');
    			$('#Position-primitive-container .labelsY').attr('id', 'Position-Y-primitive-label');
    			$('#Position-primitive-container .inputsY').attr('id', 'Position-Y-primitive-input');
    			$('#Position-primitive-container .labelsZ').attr('id', 'Position-Z-primitive-label');
    			$('#Position-primitive-container .inputsZ').attr('id', 'Position-Z-primitive-input');

    			$('#Rotation-primitive-container h2').attr('id', 'Rotation-primitive-titre');
    			$('#Rotation-primitive-container .labelsX').attr('id', 'Rotation-X-primitive-label');
    			$('#Rotation-primitive-container .inputsX').attr('id', 'Rotation-X-primitive-input');
    			$('#Rotation-primitive-container .labelsY').attr('id', 'Rotation-Y-primitive-label');
    			$('#Rotation-primitive-container .inputsY').attr('id', 'Rotation-Y-primitive-input');
    			$('#Rotation-primitive-container .labelsZ').attr('id', 'Rotation-Z-primitive-label');
    			$('#Rotation-primitive-container .inputsZ').attr('id', 'Rotation-Z-primitive-input');

    			$('#Longueur-primitive-container h2').attr('id', 'Longueur-primitive-titre');
    			$('#Longueur-primitive-container label').attr('id', 'Longueur-primitive-label');
    			$('#Longueur-primitive-container input').attr('id', 'Longueur-primitive-input');

    			$('#Largeur-primitive-container h2').attr('id', 'Largeur-primitive-titre');
    			$('#Largeur-primitive-container label').attr('id', 'Largeur-primitive-label');
    			$('#Largeur-primitive-container input').attr('id', 'Largeur-primitive-input');

    			$('#Profondeur-primitive-container h2').attr('id', 'Profondeur-primitive-titre');
    			$('#Profondeur-primitive-container label').attr('id', 'Profondeur-primitive-label');
    			$('#Profondeur-primitive-container input').attr('id', 'Profondeur-primitive-input');

    			$('#Radius-primitive-container h2').attr('id', 'Radius-primitive-titre');
    			$('#Radius-primitive-container label').attr('id', 'Radius-primitive-label');
    			$('#Radius-primitive-container input').attr('id', 'Radius-primitive-input');

    			$('#Identifiant-primitive-container h2').attr('id', 'Identifiant-primitive-titre');
    			$('#Identifiant-primitive-container label').attr('id', 'Identifiant-primitive-label');
    			$('#Identifiant-primitive-container input').attr('id', 'Identifiant-primitive-input');

    			$('#Primitive-valid-container button').attr('id', 'Primitive-valid');

    			/*Vérification fermeture fenêtres paramètres*/
				$('#reglages').hide();
				$('.params').hide();

    			/*identification de l'outil choisi*/
    			var tool = $(this).attr('id');

    			/*initialisation variables*/
    			switch (tool) {
    				/*initialisation variables pour ciel*/
	    			case ( tool = "sky"):
	    			var px = 0;
					var py = 0;
					var pz = 0;
					var rx = 0;
					var ry = 0;
					var rz = 0;
					var la = 30;
					var lo = 30;
					var rad = 5000;
					var clr = "#8BC34A";
					var idObjet = tool;
					break;
	    			/*initialisation variables pour plan*/
	    			case ( tool = "plane"):
	    			var px = 1;
					var py = -2;
					var pz = -5;
					var rx = -90;
					var ry = 0;
					var rz = 0;
					var la = 30;
					var lo = 30;
					var clr = "#26a69a";
					var idObjet = tool;
					break;
					/*initialisation variables pour cube*/
					case ( tool = "box"):
					var px = -5;
					var py = 3;
					var pz = -8;
					var rx = 0;
					var ry = 45;
					var rz = 45;
					var la = 2;
					var lo = 2;
					var pr = 2;
					var clr = "#43a047";
					var idObjet = tool;
					break;
					/*initialisation variables pour sphere*/
					case ( tool = "sphere"):
					var px = 3;
					var py = 2;
					var pz = -10;
					var rx = -90;
					var ry = 0;
					var rz = 0;
					var la = 10;
					var lo = 10;
					var rad = 1;
					var clr = "#8e24aa";
					var idObjet = tool;
					break;
					/*initialisation variables pour cylindre*/
					case ( tool = "cylinder"):
					var px = 3;
					var py = 1;
					var pz = -7;
					var rx = 0;
					var ry = 90;
					var rz = 0;
					var la = 3;
					var lo = 4;
					var rad = 1;
					var clr = "#f4511e";
					var idObjet = tool;
					break;
					/*initialisation variables pour tore*/
					case ( tool = "torus"):
					var px = 3;
					var py = 1;
					var pz = -7;
					var rx = 0;
					var ry = 90;
					var rz = 0;
					var la = 3;
					var lo = 4;
					var rad = 1;
					var clr = "#FF8F00";
					var idObjet = tool;
					break;
				}

				/*Initialisations fenetre parametres couleur*/

				$('#Couleur-primitive-titre').attr('id', 'Couleur-'+tool+'-titre');
				$('#Couleur-primitive-label').attr('id', 'Couleur-'+tool+'-label');
				$('#Couleur-primitive-input').attr('id', 'Couleur-'+tool+'-input').val(clr);

				/*Initialisations fenetre parametres position*/

				$('#Position-primitive-titre').attr('id', 'Position-'+tool+'-titre');
				$('#Position-X-primitive-label').attr('id', 'Position-X-'+tool+'-label');
				$('#Position-X-primitive-input').attr('id', 'Position-X-'+tool+'-input').val(px);
				$('#Position-Y-primitive-label').attr('id', 'Position-Y-'+tool+'-label');
				$('#Position-Y-primitive-input').attr('id', 'Position-Y-'+tool+'-input').val(py);
				$('#Position-Z-primitive-label').attr('id', 'Position-Z-'+tool+'-label');
				$('#Position-Z-primitive-input').attr('id', 'Position-Z-'+tool+'-input').val(pz);

				/*Initialisations fenetre parametres rotation*/

				$('#Rotation-primitive-titre').attr('id', 'Rotation-'+tool+'-titre');
				$('#Rotation-X-primitive-label').attr('id', 'Rotation-X-'+tool+'-label');
				$('#Rotation-X-primitive-input').attr('id', 'Rotation-X-'+tool+'-input').val(rx);
				$('#Rotation-Y-primitive-label').attr('id', 'Rotation-Y-'+tool+'-label');
				$('#Rotation-Y-primitive-input').attr('id', 'Rotation-Y-'+tool+'-input').val(ry);
				$('#Rotation-Z-primitive-label').attr('id', 'Rotation-Z-'+tool+'-label');
				$('#Rotation-Z-primitive-input').attr('id', 'Rotation-Z-'+tool+'-input').val(rz); 

				/*Initialisations fenetre parametres longueur*/

				$('#Longueur-primitive-titre').attr('id', 'Longueur-'+tool+'-titre');
				$('#Longueur-primitive-label').attr('id', 'Longueur-'+tool+'-label');
				$('#Longueur-primitive-input').attr('id', 'Longueur-'+tool+'-input').val(lo);

				/*Initialisations fenetre parametres largeur*/

				$('#Largeur-primitive-titre').attr('id', 'Largeur-'+tool+'-titre');
				$('#Largeur-primitive-label').attr('id', 'Largeur-'+tool+'-label');
				$('#Largeur-primitive-input').attr('id', 'Largeur-'+tool+'-input').val(la);

				/*Initialisations fenetre parametres Profondeur*/

				$('#Profondeur-primitive-titre').attr('id', 'Profondeur-'+tool+'-titre');
				$('#Profondeur-primitive-label').attr('id', 'Profondeur-'+tool+'-label');
				$('#Profondeur-primitive-input').attr('id', 'Profondeur-'+tool+'-input').val(pr);

				/*Initialisations fenetre parametres Profondeur*/

				$('#Radius-primitive-titre').attr('id', 'Radius-'+tool+'-titre');
				$('#Radius-primitive-label').attr('id', 'Radius-'+tool+'-label');
				$('#Radius-primitive-input').attr('id', 'Radius-'+tool+'-input').val(rad);

				/*Initialisations fenetre parametres identifiant*/

				$('#Identifiant-primitive-titre').attr('id', 'Identifiant-'+tool+'-titre');
				$('#Identifiant-primitive-label').attr('id', 'Identifiant-'+tool+'-label');
				$('#Identifiant-primitive-input').attr('id', 'Identifiant-'+tool+'-input').val(idObjet);

				$('#Primitive-valid').attr('id', tool+'-valid');


				/*Affichage fenetre parametres*/
				$('#reglages').toggle();

				/*initialisation modules fenetre*/
				switch (tool) {
					/*initialisation modules pour sky*/
	    			case ( tool = "sky"):
	    			$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Radius-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
	    			/*initialisation modules pour plan*/
	    			case ( tool = "plane"):
	    			$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Longueur-primitive-container').toggle();
	    			$('#Largeur-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
					/*initialisation modules pour cube*/
					case ( tool = "box"):
					$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Longueur-primitive-container').toggle();
	    			$('#Largeur-primitive-container').toggle();
	    			$('#Profondeur-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
					/*initialisation modules pour sphere*/
					case ( tool = "sphere"):
					$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Radius-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
					/*initialisation modules pour cylindre*/
					case ( tool = "cylinder"):
					$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Longueur-primitive-container').toggle();
	    			$('#Radius-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
					/*initialisation modules pour tore*/
					case ( tool = "torus"):
					$('#Couleur-primitive-container').toggle();	    			
	    			$('#Position-primitive-container').toggle();
	    			$('#Rotation-primitive-container').toggle();
	    			$('#Longueur-primitive-container').toggle();
	    			$('#Largeur-primitive-container').toggle();
	    			$('#Profondeur-primitive-container').toggle();
	    			$('#Radius-primitive-container').toggle();
	    			$('#Identifiant-primitive-container').toggle();
	    			$('#Primitive-valid-container').toggle();
					break;
				}	   			
			
				/*au clic sur un bouton de validation :*/
				$('.valideur').on('click', function() {

					/*Récupération variables*/
					clr = $('#Couleur-'+tool+'-input').val();
	    			px = $('#Position-X-'+tool+'-input').val();
	    			py = $('#Position-Y-'+tool+'-input').val();
	    			pz = $('#Position-Z-'+tool+'-input').val();
	    			rx = $('#Rotation-X-'+tool+'-input').val();
	    			ry = $('#Rotation-Y-'+tool+'-input').val();
	    			rz = $('#Rotation-Z-'+tool+'-input').val();
	    			lo = $('#Longueur-'+tool+'-input').val();
	    			la = $('#Largeur-'+tool+'-input').val();
	    			pr = $('#Profondeur-'+tool+'-input').val();
	    			rad = $('#Radius-'+tool+'-input').val();	    			
	    			idObjet = $('#Identifiant-'+tool+'-input').val();


	    			/*Création du calque*/
					$('<li id="calque-'+idObjet+'" class="calques" ><p>'+idObjet+'</p</li>').appendTo('#calques');

	    			/*Création forme*/
	    			$('<a-'+tool+' id="'+idObjet+'" ></a-'+tool+'>').appendTo('#a-scene');

	    			/*Attribution variables à la forme*/
					$('#'+idObjet).attr({  
						visible: "1",
						position: px+" "+py+" "+pz,
						rotation: rx+" "+ry+" "+rz,	
						height: lo,	
						width: la,
						depth: pr,
						radius: rad,
						color: clr,
						class: tool,
					});

					/*Fermeture fenêtre paramètres*/
					$('#reglages').hide(400);
					$('.params').hide(400); 					
				});
			}); 
			
			/*	au clic sur un calque :
					$('.calques').on('click', function () {
						$(this).attr('id')
						alert("ok");
						var position = $(this).attr('position').split(' ');
						alert(position);
						var rotation = $(this).attr('rotation').split(' ');
						px = position[0];
	    				py = position[1];
	    				pz = position[2];
	    				rx = rotation[0];
	    				ry = rotation[1];
	    				rz = rotation[2];
	    				lo = $('#Lo-'+tool).val();
	    				la = $('#La-'+tool).val();
	    				clr = $('#Clr-'+tool).val();
	    				id = $('#Id-'+tool).val();
				
					});	
					*/			
		});