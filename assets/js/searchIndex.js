
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"OnInjectionCompleteAttribute",
            content:"OnInjectionCompleteAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/OnInjectionCompleteAttribute',
            title:"OnInjectionCompleteAttribute",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"Reflection Assemblies",
            content:"Reflection Assemblies",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/Assemblies',
            title:"Reflection.Assemblies",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"IElementBuilderGroup",
            content:"IElementBuilderGroup",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/IElementBuilderGroup',
            title:"IElementBuilderGroup",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"AssetListBase",
            content:"AssetListBase",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetListBase',
            title:"AssetListBase",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"MeshUtils",
            content:"MeshUtils",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/MeshUtils',
            title:"MeshUtils",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"FollowMouse",
            content:"FollowMouse",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FollowMouse',
            title:"FollowMouse",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"PooledList",
            content:"PooledList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/PooledList_1',
            title:"PooledList<T>",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"Utils EnumCache",
            content:"Utils EnumCache",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/EnumCache_1',
            title:"Utils.EnumCache<T>",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"ConstructorBuilder",
            content:"ConstructorBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/ConstructorBuilder',
            title:"ConstructorBuilder",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"Conversation",
            content:"Conversation",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Conversation',
            title:"Conversation",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"ElementBuilderGroupExtensions",
            content:"ElementBuilderGroupExtensions",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/ElementBuilderGroupExtensions',
            title:"ElementBuilderGroupExtensions",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"ScriptGenerator AliasAttribute",
            content:"ScriptGenerator AliasAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/AliasAttribute',
            title:"ScriptGenerator.AliasAttribute",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"MissileLauncher",
            content:"MissileLauncher",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/MissileLauncher',
            title:"MissileLauncher",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"FloatingTextTypewriter",
            content:"FloatingTextTypewriter",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingTextTypewriter',
            title:"FloatingTextTypewriter",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"CSharp NameVerbosity",
            content:"CSharp NameVerbosity",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/NameVerbosity',
            title:"CSharp.NameVerbosity",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"AnimationReferenceAttribute",
            content:"AnimationReferenceAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AnimationReferenceAttribute',
            title:"AnimationReferenceAttribute",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"AssetList",
            content:"AssetList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetList_1',
            title:"AssetList<T>",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"FieldBuilder",
            content:"FieldBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/FieldBuilder',
            title:"FieldBuilder",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"TypeBuilder",
            content:"TypeBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/TypeBuilder',
            title:"TypeBuilder",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"Utils CollectionPool",
            content:"Utils CollectionPool",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/CollectionPool_2',
            title:"Utils.CollectionPool<TCollection, TElement>",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"MissileRain",
            content:"MissileRain",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/MissileRain',
            title:"MissileRain",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"ItemShop",
            content:"ItemShop",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/ItemShop',
            title:"ItemShop",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"Item",
            content:"Item",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Item',
            title:"Item",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"GameOverScreen",
            content:"GameOverScreen",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/GameOverScreen',
            title:"GameOverScreen",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"Utils IOnCreate",
            content:"Utils IOnCreate",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/IOnCreate',
            title:"Utils.IOnCreate",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"BillboardManager",
            content:"BillboardManager",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/BillboardManager',
            title:"BillboardManager",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"TextureGenerator",
            content:"TextureGenerator",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/TextureGenerator',
            title:"TextureGenerator",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"FloatingText",
            content:"FloatingText",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingText',
            title:"FloatingText",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"ObjectList",
            content:"ObjectList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/ObjectList',
            title:"ObjectList",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"CSharp",
            content:"CSharp",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/CSharp',
            title:"CSharp",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"ElementBuilder",
            content:"ElementBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/ElementBuilder',
            title:"ElementBuilder",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"IMetaDataProvider",
            content:"IMetaDataProvider",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/IMetaDataProvider_1',
            title:"IMetaDataProvider<T>",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"TextGenerator",
            content:"TextGenerator",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/TextGenerator',
            title:"TextGenerator",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"StunOnContact",
            content:"StunOnContact",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/StunOnContact',
            title:"StunOnContact",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"Asset",
            content:"Asset",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/Asset_1',
            title:"Asset<T>",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"MetaAssetList",
            content:"MetaAssetList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/MetaAssetList_2',
            title:"MetaAssetList<TAsset, TMeta>",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"ProceduralAsset",
            content:"ProceduralAsset",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/ProceduralAsset',
            title:"ProceduralAsset",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"Timer",
            content:"Timer",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/Timer',
            title:"Timer",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"OptionalBool",
            content:"OptionalBool",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/OptionalBool',
            title:"OptionalBool",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"ItemList",
            content:"ItemList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/ItemList',
            title:"ItemList",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"DamageSystem",
            content:"DamageSystem",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/DamageSystem',
            title:"DamageSystem",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"PathMatcher",
            content:"PathMatcher",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/PathMatcher',
            title:"PathMatcher",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"FloatingTextBounce",
            content:"FloatingTextBounce",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingTextBounce',
            title:"FloatingTextBounce",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"ScriptGenerator",
            content:"ScriptGenerator",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/ScriptGenerator',
            title:"ScriptGenerator",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"AssetReferenceAttribute",
            content:"AssetReferenceAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetReferenceAttribute',
            title:"AssetReferenceAttribute",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"ItemDisplay",
            content:"ItemDisplay",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/ItemDisplay',
            title:"ItemDisplay",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"FieldBuilder AppendInitialiserMethod",
            content:"FieldBuilder AppendInitialiserMethod",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/AppendInitialiserMethod',
            title:"FieldBuilder.AppendInitialiserMethod",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"MissileList",
            content:"MissileList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/MissileList',
            title:"MissileList",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"AssetInjectionAttribute",
            content:"AssetInjectionAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetInjectionAttribute',
            title:"AssetInjectionAttribute",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"PoolableBehaviour",
            content:"PoolableBehaviour",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/PoolableBehaviour_1',
            title:"PoolableBehaviour<T>",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"FloatingTextUnity",
            content:"FloatingTextUnity",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingTextUnity',
            title:"FloatingTextUnity",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"Building",
            content:"Building",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Building',
            title:"Building",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"PrefAttribute PrefType",
            content:"PrefAttribute PrefType",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/PrefType',
            title:"PrefAttribute.PrefType",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"Substring",
            content:"Substring",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/Substring',
            title:"Substring",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"AssetInstanceAttribute",
            content:"AssetInstanceAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetInstanceAttribute',
            title:"AssetInstanceAttribute",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"IReferenceIndex",
            content:"IReferenceIndex",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/IReferenceIndex',
            title:"IReferenceIndex",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"MeshBuilder MeshChannel",
            content:"MeshBuilder MeshChannel",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/MeshChannel',
            title:"MeshBuilder.MeshChannel",
            description:""
        }
    );
    a(
        {
            id:57,
            title:"IDealDamage",
            content:"IDealDamage",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/IDealDamage',
            title:"IDealDamage",
            description:""
        }
    );
    a(
        {
            id:58,
            title:"TextManager DamageType",
            content:"TextManager DamageType",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/DamageType',
            title:"TextManager.DamageType",
            description:""
        }
    );
    a(
        {
            id:59,
            title:"ObjectPool",
            content:"ObjectPool",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/ObjectPool_1',
            title:"ObjectPool<T>",
            description:""
        }
    );
    a(
        {
            id:60,
            title:"AppendFunction",
            content:"AppendFunction",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/AppendFunction',
            title:"AppendFunction",
            description:""
        }
    );
    a(
        {
            id:61,
            title:"PooledList",
            content:"PooledList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/PooledList',
            title:"PooledList",
            description:""
        }
    );
    a(
        {
            id:62,
            title:"AssetGeneratorAttribute",
            content:"AssetGeneratorAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/AssetGeneratorAttribute',
            title:"AssetGeneratorAttribute",
            description:""
        }
    );
    a(
        {
            id:63,
            title:"ItemMetaData",
            content:"ItemMetaData",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/ItemMetaData',
            title:"ItemMetaData",
            description:""
        }
    );
    a(
        {
            id:64,
            title:"Missile",
            content:"Missile",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Missile',
            title:"Missile",
            description:""
        }
    );
    a(
        {
            id:65,
            title:"InjectorScriptBuilder",
            content:"InjectorScriptBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/InjectorScriptBuilder',
            title:"InjectorScriptBuilder",
            description:""
        }
    );
    a(
        {
            id:66,
            title:"PropertyBuilder",
            content:"PropertyBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/PropertyBuilder',
            title:"PropertyBuilder",
            description:""
        }
    );
    a(
        {
            id:67,
            title:"Reflection",
            content:"Reflection",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/Reflection',
            title:"Reflection",
            description:""
        }
    );
    a(
        {
            id:68,
            title:"PrefabGenerator",
            content:"PrefabGenerator",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/PrefabGenerator',
            title:"PrefabGenerator",
            description:""
        }
    );
    a(
        {
            id:69,
            title:"UnityScripts",
            content:"UnityScripts",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/UnityScripts',
            title:"UnityScripts",
            description:""
        }
    );
    a(
        {
            id:70,
            title:"SimpleScriptBuilder",
            content:"SimpleScriptBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/SimpleScriptBuilder',
            title:"SimpleScriptBuilder",
            description:""
        }
    );
    a(
        {
            id:71,
            title:"FloatingTextFade",
            content:"FloatingTextFade",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingTextFade',
            title:"FloatingTextFade",
            description:""
        }
    );
    a(
        {
            id:72,
            title:"ScriptBuilder",
            content:"ScriptBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/ScriptBuilder',
            title:"ScriptBuilder",
            description:""
        }
    );
    a(
        {
            id:73,
            title:"ObjectPool",
            content:"ObjectPool",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/ObjectPool',
            title:"ObjectPool",
            description:""
        }
    );
    a(
        {
            id:74,
            title:"PrefAttribute",
            content:"PrefAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/PrefAttribute',
            title:"PrefAttribute",
            description:""
        }
    );
    a(
        {
            id:75,
            title:"MemberBuilder",
            content:"MemberBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/MemberBuilder',
            title:"MemberBuilder",
            description:""
        }
    );
    a(
        {
            id:76,
            title:"IPoolable",
            content:"IPoolable",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/IPoolable',
            title:"IPoolable",
            description:""
        }
    );
    a(
        {
            id:77,
            title:"FrameRate",
            content:"FrameRate",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FrameRate',
            title:"FrameRate",
            description:""
        }
    );
    a(
        {
            id:78,
            title:"CustomInspector",
            content:"CustomInspector",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/CustomInspector',
            title:"CustomInspector",
            description:""
        }
    );
    a(
        {
            id:79,
            title:"AssetGenerator",
            content:"AssetGenerator",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Procedural/AssetGenerator',
            title:"AssetGenerator",
            description:""
        }
    );
    a(
        {
            id:80,
            title:"IAssetList",
            content:"IAssetList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/IAssetList_1',
            title:"IAssetList<T>",
            description:""
        }
    );
    a(
        {
            id:81,
            title:"LazyAssetList",
            content:"LazyAssetList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/LazyAssetList_1',
            title:"LazyAssetList<T>",
            description:""
        }
    );
    a(
        {
            id:82,
            title:"Score",
            content:"Score",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Score',
            title:"Score",
            description:""
        }
    );
    a(
        {
            id:83,
            title:"TextManager",
            content:"TextManager",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/TextManager',
            title:"TextManager",
            description:""
        }
    );
    a(
        {
            id:84,
            title:"WeaverUtils",
            content:"WeaverUtils",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/WeaverUtils',
            title:"WeaverUtils",
            description:""
        }
    );
    a(
        {
            id:85,
            title:"Explosion",
            content:"Explosion",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/Explosion',
            title:"Explosion",
            description:""
        }
    );
    a(
        {
            id:86,
            title:"InjectionAttribute",
            content:"InjectionAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/InjectionAttribute',
            title:"InjectionAttribute",
            description:""
        }
    );
    a(
        {
            id:87,
            title:"TypeInfo",
            content:"TypeInfo",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/TypeInfo',
            title:"TypeInfo",
            description:""
        }
    );
    a(
        {
            id:88,
            title:"EditorPrefAttribute",
            content:"EditorPrefAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/EditorPrefAttribute',
            title:"EditorPrefAttribute",
            description:""
        }
    );
    a(
        {
            id:89,
            title:"MetaDataUtils",
            content:"MetaDataUtils",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/MetaDataUtils',
            title:"MetaDataUtils",
            description:""
        }
    );
    a(
        {
            id:90,
            title:"AssetList",
            content:"AssetList",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetList',
            title:"AssetList",
            description:""
        }
    );
    a(
        {
            id:91,
            title:"NamespaceBuilder",
            content:"NamespaceBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/NamespaceBuilder',
            title:"NamespaceBuilder",
            description:""
        }
    );
    a(
        {
            id:92,
            title:"ProceduralAssetAttribute",
            content:"ProceduralAssetAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/ProceduralAssetAttribute',
            title:"ProceduralAssetAttribute",
            description:""
        }
    );
    a(
        {
            id:93,
            title:"AccessModifiers",
            content:"AccessModifiers",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/AccessModifiers',
            title:"AccessModifiers",
            description:""
        }
    );
    a(
        {
            id:94,
            title:"FloatingTextExtensions",
            content:"FloatingTextExtensions",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/FloatingTextExtensions',
            title:"FloatingTextExtensions",
            description:""
        }
    );
    a(
        {
            id:95,
            title:"IDependant",
            content:"IDependant",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/IDependant_1',
            title:"IDependant<T>",
            description:""
        }
    );
    a(
        {
            id:96,
            title:"MeshBuilder",
            content:"MeshBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/MeshBuilder',
            title:"MeshBuilder",
            description:""
        }
    );
    a(
        {
            id:97,
            title:"Utils",
            content:"Utils",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik/Utils',
            title:"Utils",
            description:""
        }
    );
    a(
        {
            id:98,
            title:"MethodBuilder",
            content:"MethodBuilder",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Kybernetik.ProceduralScripting/MethodBuilder',
            title:"MethodBuilder",
            description:""
        }
    );
    a(
        {
            id:99,
            title:"AssetListEditor",
            content:"AssetListEditor",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetListEditor',
            title:"AssetListEditor",
            description:""
        }
    );
    a(
        {
            id:100,
            title:"DamageOnContact",
            content:"DamageOnContact",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/DamageOnContact',
            title:"DamageOnContact",
            description:""
        }
    );
    a(
        {
            id:101,
            title:"AssetPoolAttribute",
            content:"AssetPoolAttribute",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver/AssetPoolAttribute',
            title:"AssetPoolAttribute",
            description:""
        }
    );
    a(
        {
            id:102,
            title:"ITakeDamage",
            content:"ITakeDamage",
            description:'',
            tags:''
        },
        {
            url:'/weaver/api/Weaver.Examples/ITakeDamage',
            title:"ITakeDamage",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
