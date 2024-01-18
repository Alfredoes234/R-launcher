use anyhow::{Result, Error};
use axum::{
    middleware,
    response::{Response, IntoResponse},
    routing::{get, post}, Router
};

pub async fn app() -> Result<(), Error> {
    let app = Router::new()
        .route("/", get(index))
        .layer(middleware::map_response(main_response_mapper));
    // Run it
    let listener = tokio::net::TcpListener::bind("localhost:8080")
        .await?;
    axum::serve(listener, app).await?;
    Ok(())
}

async fn main_response_mapper(res: Response) -> Response {
    println!("{:<12} - main_response_mapper", "RES_MAPPER");
    println!("{res:?}");
    res
}

async fn index() -> impl IntoResponse {
    "Hello, from backend!"
}