const APP_SAY = `
                    .  .          .       :   .          .             t                            
              i .            ..      :                  .   ..     .      . .   ,                   
                      :  .     ..     .   .     i        :             . . .  :                     
                       :.. .  :  .. ;:. ...  .         .     .;.       .  ;  .                      
                    ..  .   :    t..  ...   . .       .          .   ; .. .    .    .               
                 .   .fEi,,..    ,.   .  , .:.        .  .     . . ..  j ..Dj .  .                  
                 .,  G .:,L:,fD .  .    G :     f    .. ,    .   .    .  .   ; t.t                  
              ,    .:.i; .  Li ..iG,E .:.#.:    .   .      . .     ,  L.:..     .                   
     .    :   .  . , fLiKi..:   D.j .;f,j..f    . L.. .  Gi ..  .. j...:..  .: .                    
    .          .tt ,.LLLj#fD..::jW.DGi :;ti:..f . . ,   f. ..;..  .   . L.: . ,. : :  :             
               ;. ,t. iKKD:i Df##.GiL;GfE:f ,..  G      ..tff. ,,  : DW t:,LE.. .                   
             .  t..j jLifKKWWfEWDt###j;K.G,.;.: :.# . ij.t;tD:i.   : ,jGti,. i.                     
            .:. ..##Lj#W##WWE####ED#DKLGfWf, . :;tDKi,.,,LL;G#GL : .,,DfE G D.  :                   
              :.. j,::##############K####:K :,i: :iL#iW#:.E LD#W#i.GitKGj     .W:                   
       f.  . ..  ;K,KGG##############W##KKGK;i,.W.L,#L;iWW,E,t#WEW,.jWKff## .,j i      .  .         
           ::L.:t.,WGD##################KW.,.ifjK.##G#KE#;tW.##D.G#;:KK#W###W. ,#f       .          
  .i.      :..,.,t#tW#K###############D#W#E::K:L#t##W###KW#,###D;f #W#W#G  .:,jL;:       .  .       
    . .   .f;:# ,KjE###############W######LjiK#EWj##E#W###K#####    K#WW.   .#L#j:;  ..   .         
           ,i,W.WWK#################f      Ki##K;KL###WK######W     L#Lj     #jE;.Kj :  i ..,       
          t.j:###KKW#############j     jj   WKW#####W##W######.      W#      ;ii E#D      . :  : :  
           : ,#W####W##########     :#K###,  WKD##############,      W#.     :WD:#G ..            . 
            , f;W#L#W#######E     .########  #W################L    D:#f     EG;#. i  .          :  
 .        .EL.jK:W########K       ##WWK####  ##################K    .W#t    #KWW      .. .          
         t .G.fE#W#######.       :.W#####W#. W#################     .E#     tWW..    . ,    :i   .  
            :.,    :###G.         #########  W#########t  ##G        ##    . D:    WE ..   .        
          .   ,     W#:         K##########  ##########              EW      # ; W.#. .  ,  .   .   
            ;G      t:       .i############ .######### .             E,   f   .D  E , ...    .      
        ,   G                #W;########K ., ########                ii   #       ,...L:it .        
        . ..W              .##.  #####;.t#fE.#######E                f, .KD        .  .     :       
         :.               ,###   #; .  W##.GD#######G              .DE  .           .L .  .t     .  
           .              ####  .     t### :########L           :####t            tt ; t  : ..    : 
         ,  i            W##i.        #### .########G          j#####,            G.  .   .         
        . .:E           ##            ####  #########      L#  W#####,            ; ..  ....     .  
        j. .L          iW             ###E :#########      :#, K.   ;             W: .  .  i     .  
    ,    .   f         ##.            ###: f#########..    EW:    ..          i##.,Kj  :        .   
     ...     ; .       #j            ####  W########W  ##:D    t#E  L        .jK#::..  :     ,      
   f   .  ..  j.       #E          W#####  ########j  . W     W#K  #j K   ;   # Kt..: :             
      .    :. ;tG      ##         #######, #######W         , .K  ##  #j  #    .f: E     .     . .  
   .    K... iGt##     ##.        E##j##Et #######W        #. .. ### ;#t  .     ; j   .  .    ,     
   i     .   .W###     ###K #.     ##.##: f########        i    W#G# .#:        #E.jW   ;    ..  .. 
          . i#G###;    WK#W#     L  # ##  #########i..         E#W#W j#         G#:f.        j  . j 
        t :i#:#####    D;f#W .:  # .. W# .##########i W#D  #  . #;#t W#.E.    W#.fL.  ;     ; .  :  
         .E,it#####    j:## .#i  W.   LE  #########iW####L .   ;W   i##.##.  #: WG .   .    .      t
     .    :.#.#####D    ##  t#.  WW   :..i########E######t   j#:  t K#D tK#    W#jf .    . j  .     
    :t.  ,E,;#######    .  .#K   K#      K################.f    # # Lt.;#.     ###: ,.f    ,. . .   
   .  K.. ;f#######G    . t#i:   K#:     ###############W    .###.# f# K#.     W##.W; ;:   :        
    . .  .jDWD#EW   .   ######   E#W     ##########WKj       .E##GL Wf ##W   .W##G  L..,    ..      
   : t f L ##jKE#;EGE   K#####D  G#W#  G #########.        .   .DDWt#  WEi      .    t: :t, .       
 : .,G ,. .ifLW.tG; #f  G#####K  jW###tE;#########f         W.  .jK,K                 . # ...       
    ,#.  :#.DWK;i. ,#W  .;    .      :;fD#########:     .E#.#K    ,##       ,;        #fW..         
  . f#D,jf #ifD# .:#W#.      :DEf.E###t.###E######     ###. ##    ##D                 t,,.;.  E . j.
   . : .; .j  ,;.;jj#D#.                #j:#######.  E##i  L###.  :#t    .DW##WG,      W, .:        
  .. , G.:..t..#  Ejt##    iW#########  WGKE####### ##. ..K#####.  #W.  ###########j  GGi,t    i .  
  .:#W ; t...:E# . ..i#i  ############  :Df##jGLW##W, . K######GW ###f #############fK;i  .:        
   .KWf ,. .:G i  . D..E.:############  :f#:,:K#### .;W#############################WLjD  .    j   :
    ,GKK.G ,:, ;i..   ..ii##########D L..#  .#f##EGf################################KLL;,.   :      
    ,LKDE Lf;,L, ..   .  W#########L  .DG. :i;WEj#f##################################K#.;.          
  K. # ;:, G.KE. i.      #########W   .L   ::E#E#W##################################L;t...   .      
   .  L..;. : i:.       G########W.  .    :  W,,WW#################################.jfii   :j#  .   
  .  :  .W j: .   ;     DDK#####W.  :   .Lii. ;f,##################################K,    .          
    .   . .; .:. .      ED#####f .t   .L;Gt,: #:##################################i#.;    .         
        .        .    jtE;####.:: :  ... , .:;D##################################K j                
      .      . .      :#E#j;,. .:;   :.ii :f,,E###############################,#j,   .:   .         
                    ;:#WjWj  WfE   : ,KL.L. Lj###################K############W,:t:.,               
              .     ,j:GLD  GGK.  .. L  ,  G,############ f#:###E##########K#tEW.,  .               
                      .DWj.j#G   ;t:; ..  j.E########### :K.K#;K##########GWj;GtL                   
                   .. #;GtD#.. .: :D     j.   ########D.t  ,# ###########iEW .LK .                  
                     t .GDD  .  .DW  .;..j     j####.Dj.i DD ############,.Gi  .. .:.               
                       .:.   .DiGG: ,;         ;,.ji  G ii:.i:D########j   .  ..    .               
                       .   .. t,,,,: ;.        :.L.,:.:.,   .KWW######,iL,       .                  
                           ,.:;;.,            .,: .;i  :.. i.tjL##### :   ,:  ;   .                 
                          .. W..             .W::.  : .   . :,t;,##;        ..                      
                            ,: .             :.: :.       ji , .:#                                  
                            : :.                              ..,       ,                           
                                                              L                  .                  
                                                                                                    
                                                            :                                       
`

const LOG_TAG_STYLE = 'background: #35495e; color: #fff; border-radius: 3px 0 0 3px;padding:2px 5px'
const LOG_CONTENT_STYLE = 'background: #41b883; color: #fff; border-radius: 0 3px 3px 0;padding:2px 5px'
export {
    APP_SAY,
    LOG_TAG_STYLE,
    LOG_CONTENT_STYLE
}
